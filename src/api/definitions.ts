import { useQuery } from 'react-query';
import { fetchData } from './axios';
import type { Definition, ID } from './types';

export function useDefinitions(chapterId?: ID | undefined) {
  if (chapterId === undefined)
    return useQuery<Definition[], Error>('definitions', () =>
      fetchData('/definitions.json'),
    );

  return useQuery<Definition[], Error>(['definitions', chapterId], () =>
    fetchData('/definitions.json').then((definitions: Definition[]) =>
      definitions?.filter((definition) => definition.chapterId === chapterId),
    ),
  );
}
