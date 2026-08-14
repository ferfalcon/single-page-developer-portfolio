import rawPortfolio from './portfolio.json';

export const projectIds = [
  'design-portfolio',
  'e-learning-landing-page',
  'todo-web-app',
  'entertainment-web-app',
  'memory-game',
  'art-gallery-showcase',
] as const;

export type ProjectId = (typeof projectIds)[number];

export interface ProjectRecord {
  id: ProjectId;
  title: string;
  technologies: readonly string[];
  imageAlt: string;
}

export interface PortfolioContent {
  hero: {
    portraitAlt: string;
    contactHref: '#contact';
  };
  projects: readonly ProjectRecord[];
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export function validatePortfolioContent(value: unknown): PortfolioContent {
  if (typeof value !== 'object' || value === null) {
    throw new Error('Portfolio content must be an object.');
  }

  const content = value as Record<string, unknown>;
  const hero = content.hero as Record<string, unknown> | undefined;

  if (
    typeof hero !== 'object' ||
    hero === null ||
    !isNonEmptyString(hero.portraitAlt) ||
    hero.contactHref !== '#contact'
  ) {
    throw new Error('Portfolio hero content is incomplete or has an unsupported contact target.');
  }

  if (!Array.isArray(content.projects) || content.projects.length !== projectIds.length) {
    throw new Error(`Portfolio content must include exactly ${projectIds.length} project records.`);
  }

  const ids = new Set<string>();

  for (const project of content.projects) {
    if (typeof project !== 'object' || project === null) {
      throw new Error('Every portfolio project must be an object.');
    }

    const record = project as Record<string, unknown>;

    if (
      !isNonEmptyString(record.id) ||
      !projectIds.includes(record.id as ProjectId) ||
      !isNonEmptyString(record.title) ||
      !isNonEmptyString(record.imageAlt) ||
      !Array.isArray(record.technologies) ||
      record.technologies.length === 0 ||
      !record.technologies.every(isNonEmptyString)
    ) {
      throw new Error('Portfolio project content is incomplete or has an unsupported stable ID.');
    }

    if (ids.has(record.id)) {
      throw new Error(`Portfolio content contains a duplicate project ID: ${record.id}.`);
    }

    ids.add(record.id);
  }

  for (const id of projectIds) {
    if (!ids.has(id)) {
      throw new Error(`Portfolio content is missing the required project ID: ${id}.`);
    }
  }

  return value;
}

export const portfolio = validatePortfolioContent(rawPortfolio);

export function getProject(id: ProjectId): ProjectRecord {
  const project = portfolio.projects.find((item) => item.id === id);

  if (!project) {
    throw new Error(`Portfolio content is missing the required project: ${id}.`);
  }

  return project;
}
