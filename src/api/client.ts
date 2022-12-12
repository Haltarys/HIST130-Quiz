import { QueryClient } from 'react-query';
import { fetchData } from './axios';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

queryClient.prefetchQuery('chapters', () => fetchData('/chapters.json'));
