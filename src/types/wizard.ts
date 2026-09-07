export interface ElixirSummary {
  id: string;
  name: string;
}

export interface Wizard {
  id: string;
  firstName: string | null;
  lastName: string | null;
  elixirs: ElixirSummary[];
}

export interface WizardQueryParams {
  firstName?: string;
  lastName?: string;
}

export interface KpiData {
  id: string;
  title: string;
  value: string;
  badgeText: string;
  badgeType: 'positive' | 'neutral' | 'alert';
  icon: string;
}

export interface ActivityDataPoint {
  day: string;
  fullMoonVal: number;
  newRegistrations: number;
  marker?: string;
}

export interface SpecialtyDataPoint {
  name: string;
  count: number;
  color: string;
  percentage: number;
}
