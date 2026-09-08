import type { Wizard, WizardQueryParams } from '../types/wizard';

const BASE_URL = 'https://wizard-world-api.herokuapp.com/Wizards';

export async function fetchWizards(
  params?: WizardQueryParams
): Promise<Wizard[]> {
  const queryParams = new URLSearchParams();

  if (params?.firstName) {
    queryParams.append('FirstName', params.firstName);
  }

  if (params?.lastName) {
    queryParams.append('LastName', params.lastName);
  }

  const query = queryParams.toString();
  const url = query ? `${BASE_URL}?${query}` : BASE_URL;

  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch wizards: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export async function searchWizards(query: string): Promise<Wizard[]> {
  const searchTerm = query.trim();

  if (!searchTerm) {
    return fetchWizards();
  }

  const formattedQuery = searchTerm
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  const [byFirstName, byLastName] = await Promise.all([
    fetchWizards({ firstName: formattedQuery }),
    fetchWizards({ lastName: formattedQuery }),
  ]);

  const uniqueWizards = new Map<string, Wizard>();

  [...byFirstName, ...byLastName].forEach((wizard) => {
    uniqueWizards.set(wizard.id, wizard);
  });

  return Array.from(uniqueWizards.values());
}