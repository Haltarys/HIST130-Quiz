import { useQuery } from 'react-query';
import { fetchData } from './axios';
import type { Chapter } from './types';

export function useChapters() {
  return useQuery<Chapter[], Error>('chapters', () =>
    fetchData('/chapters.json'),
  );
}
