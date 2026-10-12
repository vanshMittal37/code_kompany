/**
 * ai.js — Data for interactive AI capabilities diagram and hub.
 */

export const aiCenterNode = 'YOUR BUSINESS';

export const aiCapabilities = [
  {
    id: 'ai-chatbots',
    name: 'AI Chatbots',
    line: 'Assistants that reply, qualify and follow up — instantly.',
    flow: ['New enquiry', 'AI replies instantly', 'Lead qualified', 'Team notified'],
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation',
    line: 'Repetitive steps handled automatically between your tools.',
    flow: ['Invoice received', 'Data extracted', 'Approval routed', 'Accounts updated'],
  },
  {
    id: 'predictive-analytics',
    name: 'Predictive Analytics',
    line: 'Forecasts from your own data, not gut feel.',
    flow: ['Historic data', 'Patterns found', 'Forecast', 'Better decision'],
  },
  {
    id: 'ai-infrastructure',
    name: 'AI Infrastructure Setup',
    line: 'The foundation to run AI securely in your business.',
    flow: ['Needs assessed', 'Data connected', 'Models deployed', 'Monitored'],
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    line: 'Cameras that spot what people might miss.',
    flow: ['Camera image', 'Defect detected', 'Item flagged', 'Quality logged'],
  },
  {
    id: 'nlp-applications',
    name: 'NLP Applications',
    line: 'Contracts, reviews and emails turned into clear actions.',
    flow: ['Documents & emails', 'Key points extracted', 'Summary', 'Action'],
  },
];
