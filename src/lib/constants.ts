export const TAB_IDS = ['services', 'how-it-works', 'about'] as const;
export type TabId = (typeof TAB_IDS)[number];

export const NAV_ITEMS: { id: TabId; label: string }[] = [
  { id: 'services', label: 'Services' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'about', label: 'About' },
];

export const PHONE_NUMBER = '+40765847041';

export const TABBED_CONTENT_ID = 'tabbed-content';
