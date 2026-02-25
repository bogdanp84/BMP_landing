export const TAB_IDS = ['services', 'how-it-works', 'about', 'contact'] as const;
export type TabId = (typeof TAB_IDS)[number];

export const NAV_ITEMS: { id: TabId; label: string }[] = [
  { id: 'services', label: 'Services' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const TABBED_CONTENT_ID = 'tabbed-content';
