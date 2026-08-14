export interface ContactEntryInput {
  name: string;
  email: string;
  message: string;
}

interface ContactEntry extends ContactEntryInput {
  id: string;
}

const DATABASE_NAME = 'portfolio-contact';
const DATABASE_VERSION = 1;
const STORE_NAME = 'contact-entries';

function createContactId() {
  if (typeof crypto === 'undefined' || typeof crypto.randomUUID !== 'function') {
    throw new Error('A secure contact identifier could not be created.');
  }

  return crypto.randomUUID();
}

function openContactDatabase() {
  if (typeof indexedDB === 'undefined') {
    return Promise.reject(new Error('IndexedDB is unavailable.'));
  }

  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

    request.onupgradeneeded = () => {
      const database = request.result;

      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onblocked = () => reject(new Error('IndexedDB is blocked.'));
    request.onerror = () => reject(request.error ?? new Error('IndexedDB could not be opened.'));
  });
}

function writeContactEntry(database: IDBDatabase, entry: ContactEntry) {
  return new Promise<void>((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, 'readwrite');

    transaction.oncomplete = () => resolve();
    transaction.onabort = () => reject(transaction.error ?? new Error('IndexedDB write was aborted.'));
    transaction.onerror = () => reject(transaction.error ?? new Error('IndexedDB write failed.'));

    try {
      transaction.objectStore(STORE_NAME).add(entry);
    } catch (error) {
      transaction.abort();
      reject(error);
    }
  });
}

export async function saveContactEntry(input: ContactEntryInput) {
  const database = await openContactDatabase();

  try {
    await writeContactEntry(database, { id: createContactId(), ...input });
  } finally {
    database.close();
  }
}
