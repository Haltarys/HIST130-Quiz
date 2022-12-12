import type { RootState } from './store';

const persistKey = 'HIST130-Quiz';

export function loadPersistedState() {
  try {
    const serialisedState = localStorage.getItem(persistKey);

    return !serialisedState ? undefined : JSON.parse(serialisedState);
  } catch (error) {
    return undefined;
  }
}

export function persistState(state: RootState) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem(persistKey, serialisedState);
  } catch {}
}
