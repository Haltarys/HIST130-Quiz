import { createSlice } from '@reduxjs/toolkit';
import { RootState, useAppDispatch, useAppSelector } from 'src/store';

interface FeedbackState {
  dialogOpen: boolean;
}

const initialState: FeedbackState = {
  dialogOpen: false,
};

export const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    openDialog: (state) => {
      state.dialogOpen = true;
    },
    closeDialog: (state) => {
      state.dialogOpen = false;
    },
  },
});

export const { openDialog, closeDialog } = feedbackSlice.actions;

export function useFeedbackDialogOpen() {
  return useAppSelector((state: RootState) => state.feedback.dialogOpen);
}

export function useOpenFeedbackDialog() {
  const dispatch = useAppDispatch();

  return () => dispatch(openDialog());
}

export function useCloseFeedbackDialog() {
  const dispatch = useAppDispatch();

  return () => dispatch(closeDialog());
}

export default feedbackSlice.reducer;
