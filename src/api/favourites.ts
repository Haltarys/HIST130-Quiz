import type { ID } from './types';

export function retrieveFavouritesFromLocalStorage(): ID[] {
  // read the favourited definition IDs from localStorage and parse them into
  return (
    (JSON.parse(localStorage.getItem('HIST130-Quiz') || '{}')
      .favourites as ID[]) || []
  );
}

export function saveFavouritesToLocalStorage(favourites: ID[]): void {
  localStorage.setItem('HIST130-Quiz', JSON.stringify({ favourites }));
}
