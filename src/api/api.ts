import { useQuery } from 'react-query';
import { Chapter, Definition, ID } from './types';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchData(url: string) {
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => res.json());
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

function retrieveFavouritesFromLocalStorage(): Set<ID> {
  // read the favourited definitions from localStorage and parse them into a Set
  return new Set(
    (JSON.parse(localStorage.getItem('HIST130-Quiz') || '{}')
      .favourites as ID[]) || [],
  );
}

function saveFavouritesToLocalStorage(favouriteIDs: Set<ID>): void {
  localStorage.setItem(
    'HIST130-Quiz',
    JSON.stringify({ favourites: [...favouriteIDs.values()] }),
  );
}

// function favouriteReducer(
//   state: Set<ID>,
//   action: { type: 'add' | 'remove' | 'clear'; id: ID },
// ): Set<ID> {
//   switch (action.type) {
//     case 'add':
//       state.add(action.id);
//       break;
//     case 'remove':
//       state.delete(action.id);
//       break;
//     case 'clear':
//       state.clear();
//       break;
//     default:
//       throw new Error('Error updating the favourites');
//   }
//   saveFavouritesToLocalStorage(state);
//   return state;
// }

// export function useFavourites() {
//   const [favouriteIDs, dispatch] = useReducer(
//     favouriteReducer,
//     retrieveFavouritesFromLocalStorage(),
//   );

//   const addToFavourites = (id: ID) => dispatch({ type: 'add', id });
//   const removeFromFavourites = (id: ID) => dispatch({ type: 'remove', id });
//   const clearFavourites = () =>
//     dispatch({
//       type: 'clear',
//       // id isn't used in this case but Typescript complains if the property is missing or set as optional, so good enough
//       id: -1,
//     });

//   const [definitions, setDefinitions] = useState<Definition[] | undefined>();
//   // let definitions: Definition[] | undefined;

//   useEffect(() => {
//     fetchData(
//       '/definitions.json',
//       // (data: Definition[]) => (definitions = data),
//     );
//   }, []);

//   const filterDefinitions = () =>
//     definitions?.filter((definition) => favouriteIDs.has(definition.id));

//   const [favourites, setFavourites] = useState<Definition[] | undefined>();
//   useEffect(() => {
//     setFavourites(filterDefinitions());
//   }, [favouriteIDs, definitions]);

//   return {
//     favourites,
//     addToFavourites,
//     removeFromFavourites,
//     clearFavourites,
//   };
// }
