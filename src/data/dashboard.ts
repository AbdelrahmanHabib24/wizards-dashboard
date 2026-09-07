import type { KpiData, ActivityDataPoint, SpecialtyDataPoint } from '../types/wizard';

export const KPI_DATA: KpiData[] = [
  {
    id: 'wizards',
    title: 'TOTAL REGISTERED WIZARDS',
    value: '1,248',
    badgeText: '+4% from last moon',
    badgeType: 'neutral', 
    icon: '/assets/icon-trend-up.svg',
  },
  {
    id: 'elixirs',
    title: 'ACTIVE ELIXIRS',
    value: '856',
    badgeText: '24 new formulas registered',
    badgeType: 'neutral',
    icon: '/assets/icon-trend-formula.svg',
  },
  {
    id: 'verifications',
    title: 'PENDING VERIFICATIONS',
    value: '12',
    badgeText: 'Requires High-Council approval',
    badgeType: 'alert', 
    icon: '/assets/icon-trend-alert.svg',
  },
];

export const ACTIVITY_CHART_DATA: ActivityDataPoint[] = [
  { day: 'Day 1', fullMoonVal: 12, newRegistrations: 102 },
  { day: 'Day 3', fullMoonVal: 18, newRegistrations: 154 },
  { day: 'Day 6', fullMoonVal: 10, newRegistrations: 90 },
  { day: 'Day 9', fullMoonVal: 16, newRegistrations: 141 },
  { day: 'Day 12', fullMoonVal: 22, newRegistrations: 205 },
  { day: 'Day 15', fullMoonVal: 14, newRegistrations: 115 },
  { day: 'Day 18', fullMoonVal: 19, newRegistrations: 179 },
  { day: 'Day 21', fullMoonVal: 26, newRegistrations: 230 },
  { day: 'Day 24', fullMoonVal: 18, newRegistrations: 166 },
  { day: 'Day 27', fullMoonVal: 12, newRegistrations: 102 },
  { day: 'Day 29', fullMoonVal: 8, newRegistrations: 77 },
  { day: 'Day 30', fullMoonVal: 21, newRegistrations: 192 },
];

export const SPECIALTY_CHART_DATA: SpecialtyDataPoint[] = [
  { name: 'Alchemists', count: 562, percentage: 45, color: '#D0BCFF' },
  { name: 'Transmuters', count: 374, percentage: 30, color: '#FFB95F' },
  { name: 'Conjurers', count: 312, percentage: 25, color: '#BCC7DE' },
];

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: '/assets/icon-dashboard.svg', active: true },
  { id: 'wizards', label: 'Wizards', icon: '/assets/icon-wizards.svg', active: false },
  { id: 'elixirs', label: 'Elixirs', icon: '/assets/icon-elixirs.svg', active: false },
  { id: 'archives', label: 'Archives', icon: '/assets/icon-archives.svg', active: false },
];

export const FOOTER_NAV_ITEMS = [
  { id: 'settings', label: 'Settings', icon: '/assets/icon-settings.svg' },
  { id: 'support', label: 'Support', icon: '/assets/icon-support.svg' },
];
