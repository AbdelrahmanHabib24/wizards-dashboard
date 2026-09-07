import { useQuery } from '@tanstack/react-query';
import { useDebounce } from './useDebounce';
import { searchWizards } from '../lib/api';
import type { Wizard } from '../types/wizard';


export function useWizards(searchTerm: string) {
  const debouncedSearch = useDebounce(searchTerm, 400);

  const query = useQuery<Wizard[]>({
    queryKey: ['wizards', debouncedSearch],
    queryFn: () => searchWizards(debouncedSearch),
    staleTime: 1000 * 60 * 5,
  });

  return {
    wizards: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
    debouncedSearch,
  };
}
