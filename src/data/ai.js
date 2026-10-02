/**
 * ai.js — Data for interactive AI capabilities diagram and hub.
 */

export const aiCenterNode = 'YOUR BUSINESS';

export const aiCapabilities = [
  {
    id: 'ai-agents',
    name: 'AI Agents',
    line: 'Assistants that reply, qualify and follow up — instantly.',
    flow: ['New enquiry', 'AI replies instantly', 'Lead qualified', 'Team notified'],
  },
  {
    id: 'workflow',
    name: 'Workflow Automation',
    line: 'Repetitive steps handled automatically between your tools.',
    flow: ['Form submitted', 'Data validated', 'Record created', 'Report sent'],
  },
  {
    id: 'predictive',
    name: 'Predictive Analytics',
    line: 'Forecasts from your own data, not gut feel.',
    flow: ['Historic data', 'Patterns found', 'Forecast', 'Better decision'],
  },
  {
    id: 'vision',
    name: 'Computer Vision',
    line: 'Cameras that spot what people might miss.',
    flow: ['Camera image', 'Defect detected', 'Item flagged', 'Quality logged'],
  },
  {
    id: 'nlp',
    name: 'NLP',
    line: 'Contracts, reviews and emails turned into clear actions.',
    flow: ['Documents & emails', 'Key points extracted', 'Summary', 'Action'],
  },
];
