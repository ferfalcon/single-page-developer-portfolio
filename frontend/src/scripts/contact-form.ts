import { saveContactEntry } from '../lib/contact-store';

const form = document.querySelector<HTMLFormElement>('[data-contact-form]');

if (form) {
  const status = form.querySelector<HTMLElement>('[data-contact-status]');

  const setStatus = (message: string, state?: 'error' | 'success') => {
    if (!status) {
      return;
    }

    status.textContent = message;

    if (state) {
      status.dataset.state = state;
    } else {
      delete status.dataset.state;
    }
  };

  form.addEventListener(
    'invalid',
    () => {
      setStatus('');
    },
    true,
  );

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const values = new FormData(form);
    const name = values.get('name');
    const email = values.get('email');
    const message = values.get('message');

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      setStatus('Your message could not be saved on this device. Please try again.', 'error');
      return;
    }

    setStatus('');

    try {
      await saveContactEntry({ name, email, message });
      form.reset();
      setStatus('Your message has been saved on this device.', 'success');
    } catch {
      setStatus('Your message could not be saved on this device. Please try again.', 'error');
    }
  });
}
