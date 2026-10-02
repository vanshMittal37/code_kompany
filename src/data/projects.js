/**
 * projects.js — Case studies and portfolio projects data.
 * Replace placeholders with real project data. Never show client, outcome or liveUrl for status "placeholder".
 */

export const projects = [
  {
    id: 'project-01',
    slug: 'project-01',
    number: '01',
    name: 'Project details coming soon',
    client: null,
    industry: null,
    services: [],
    shortDescription: null,
    technologies: [],
    outcome: null,
    images: [],
    coverKey: 'project01',
    liveUrl: null,
    status: 'placeholder',
    layout: 'wide',
  },
  {
    id: 'project-02',
    slug: 'project-02',
    number: '02',
    name: 'Project details coming soon',
    client: null,
    industry: null,
    services: [],
    shortDescription: null,
    technologies: [],
    outcome: null,
    images: [],
    coverKey: 'project02',
    liveUrl: null,
    status: 'placeholder',
    layout: 'tall',
  },
  {
    id: 'project-03',
    slug: 'project-03',
    number: '03',
    name: 'Project details coming soon',
    client: null,
    industry: null,
    services: [],
    shortDescription: null,
    technologies: [],
    outcome: null,
    images: [],
    coverKey: 'project03',
    liveUrl: null,
    status: 'placeholder',
    layout: 'tall',
  },
  {
    id: 'project-04',
    slug: 'project-04',
    number: '04',
    name: 'Project details coming soon',
    client: null,
    industry: null,
    services: [],
    shortDescription: null,
    technologies: [],
    outcome: null,
    images: [],
    coverKey: 'project04',
    liveUrl: null,
    status: 'placeholder',
    layout: 'wide',
  },
  {
    id: 'project-05',
    slug: 'project-05',
    number: '05',
    name: 'Project details coming soon',
    client: null,
    industry: null,
    services: [],
    shortDescription: null,
    technologies: [],
    outcome: null,
    images: [],
    coverKey: 'project05',
    liveUrl: null,
    status: 'placeholder',
    layout: 'square',
  },
  {
    id: 'project-06',
    slug: 'project-06',
    number: '06',
    name: 'Project details coming soon',
    client: null,
    industry: null,
    services: [],
    shortDescription: null,
    technologies: [],
    outcome: null,
    images: [],
    coverKey: 'project06',
    liveUrl: null,
    status: 'placeholder',
    layout: 'wide',
  },
];

/**
 * Get featured projects for display (e.g. on Home page)
 */
export function getFeaturedProjects(count = 4) {
  return projects.slice(0, count);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}
