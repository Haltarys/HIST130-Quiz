import { useQuery } from 'react-query';
import { axiosInstance } from './clients';
import type { Chapter, Definition, ID } from './types';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchData(url: string) {
  const data = await axiosInstance.get(url).then((res) => res.data);

  // TODO: remove sleep
  // await sleep(3000);

  return data;
}

export function useChapters() {
  return useQuery<Chapter[], Error>('chapters', () =>
    fetchData('/chapters.json'),
  );
}

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
