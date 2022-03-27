import { useReducer } from 'react';
import type { ID } from 'src/api';

function retrieveFavouritesFromLocalStorage(): ID[] {
  // read the favourited definitions from localStorage and parse them into a Set
  return (
    (JSON.parse(localStorage.getItem('HIST130-Quiz') || '{}')
      .favourites as ID[]) || []
  );
}

function saveFavouritesToLocalStorage(favourites: ID[]): void {
  localStorage.setItem('HIST130-Quiz', JSON.stringify({ favourites }));
}

function favouritesReducer(
  state: ID[],
  action: { type: 'add' | 'remove' | 'clear'; id: ID },
): ID[] {
  let newState = state;

  switch (action.type) {
    case 'add':
      if (!state.includes(action.id)) {
        newState = [...state, action.id];
      }
      break;
    case 'remove':
      newState = state.filter((id) => id !== action.id);
      break;
    case 'clear':
      newState = [];
      break;
    default:
      throw new Error('Error updating the favourites');
  }
  // Asynchronous save to avoid blocking the main thread
  Promise.resolve().then(() => saveFavouritesToLocalStorage(newState));
  return newState;
}

export function useFavouriteIDs() {
  const [favouriteIDs, dispatch] = useReducer(
    favouritesReducer,
    retrieveFavouritesFromLocalStorage(),
  );

  return {
    favouriteIDs,
    onBookmark: (id: ID, isFavourited: boolean) => {
      dispatch({ type: isFavourited ? 'remove' : 'add', id });
    },
    // id isn't used in this case but Typescript complains if the property is missing or set as optional, so good enough
    clearFavourites: () => dispatch({ type: 'clear', id: -1 }),
  };
}
