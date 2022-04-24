import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {
  useCloseFeedbackDialog,
  useFeedbackDialogOpen,
} from 'src/features/feedbackSlice';
import {
  FeedbackFormData,
  FeedbackEmailResponse,
  sendFeedback,
} from 'src/api/feedback';
import {
  CancelButton,
  EmailField,
  MessageField,
  ObjectField,
  SubmitButton,
} from './atoms';
import FeedbackAlert from './FeedbackAlert';

function FeedbackDialog() {
  const dialogOpen = useFeedbackDialogOpen();
  const closeFeedbackDialog = useCloseFeedbackDialog();
  const [loading, setLoading] = useState(false);
  const [emailFeedback, setEmailFeedback] = useState<
    FeedbackEmailResponse | undefined
  >(undefined);

  const { control, handleSubmit, reset } = useForm<FeedbackFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldUnregister: true,
  });

  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={closeFeedbackDialog}
        // Disable closing the window when sending a message
        disableEscapeKeyDown={loading}
        onBackdropClick={() => {
          if (!loading) closeFeedbackDialog();
        }}
      >
        <form
          onSubmit={handleSubmit(async (data) => {
            setLoading(true);

            setEmailFeedback(await sendFeedback(data));

            closeFeedbackDialog();
            setLoading(false);
            reset();
          })}
        >
          <DialogTitle>Send feedback</DialogTitle>
          <DialogContent>
            <ObjectField control={control} />
            <EmailField control={control} />
            <MessageField control={control} />
          </DialogContent>
          <DialogActions>
            <CancelButton handleClose={closeFeedbackDialog} />
            <SubmitButton loading={loading} />
          </DialogActions>
        </form>
      </Dialog>
      {emailFeedback && (
        <FeedbackAlert
          feedback={emailFeedback}
          clearFeedback={() => setEmailFeedback(undefined)}
        />
      )}
    </>
  );
}

export default FeedbackDialog;
