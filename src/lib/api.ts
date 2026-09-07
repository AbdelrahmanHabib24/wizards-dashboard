import type { Wizard, WizardQueryParams } from '../types/wizard';

const BASE_URL = 'https://wizard-world-api.herokuapp.com/Wizards';

/**
 * Fetch wizards with optional FirstName and LastName query parameters
 */
export async function fetchWizards(params?: WizardQueryParams): Promise<Wizard[]> {
  const queryParams = new URLSearchParams();

  if (params?.firstName) {
    queryParams.append('FirstName', params.firstName);
  }
  if (params?.lastName) {
    queryParams.append('LastName', params.lastName);
  }

  const url = queryParams.toString() ? `${BASE_URL}?${queryParams.toString()}` : BASE_URL;

  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch wizards: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : [];
}


export async function searchWizards(query: string): Promise<Wizard[]> {
  const trimmed = query.trim();
  if (!trimmed) {
    return fetchWizards();
  }

  const [byFirstName, byLastName] = await Promise.all([
    fetchWizards({ firstName: trimmed }),
    fetchWizards({ lastName: trimmed }),
  ]);

  const uniqueWizards = new Map<string, Wizard>();
  [...byFirstName, ...byLastName].forEach((w) => uniqueWizards.set(w.id, w));
  return Array.from(uniqueWizards.values());
}

