export const PHONE_NUMBER = '+40765847041';

export const CONTACT_EMAIL = 'office@bmp-tech.ro';

export const DIAGNOSE_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('BMP diagnose call')}`;

export const AUTOMATION_DIAGNOSE_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('30-min automation diagnose')}`;

export const NAV_TABS = [
  { href: '/', label: 'AI-Native Delivery' },
  { href: '/build-operate-transfer', label: 'Build → Operate → Transfer' },
] as const;

export const PAGE_META = {
  home: {
    title: 'BMP · AI-native delivery for safety-critical engineering (ISO 26262 / ASPICE)',
    description:
      'BMP embeds AI directly into your SWE.1–6 delivery: test automation, assessment evidence, and governance reporting, run as ASPICE-compliant workflows.',
  },
  bot: {
    title: 'BMP · Build → Operate → Transfer your Romania delivery hub',
    description:
      'Interim MD for your Romania engineering office: launch, govern, then recruit, mentor, and transfer to your permanent local leader.',
  },
} as const;
