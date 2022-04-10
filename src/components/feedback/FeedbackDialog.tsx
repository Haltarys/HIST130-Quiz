import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FeedbackFormData, FeedbackEmailResponse, sendFeedback } from 'src/api';
import {
  CancelButton,
  EmailField,
  MessageField,
  ObjectField,
  SubmitButton,
} from './atoms';
import FeedbackAlert from './FeedbackAlert';

interface FeedbackDialogProps {
  open: boolean;
  handleClose: () => void;
}

function FeedbackDialog({ open, handleClose }: FeedbackDialogProps) {
  const [loading, setLoading] = useState(false);
  const [emailFeedback, setEmailFeedback] = useState<
    FeedbackEmailResponse | undefined
  >(undefined);

  const { control, handleSubmit, reset } = useForm<FeedbackFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldUnregister: true,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    setEmailFeedback(await sendFeedback(data));

    handleClose();
    setLoading(false);
    reset();
  });

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        // Disable closing the window when sending a message
        disableEscapeKeyDown={loading}
        onBackdropClick={() => {
          if (!loading) handleClose();
        }}
      >
        <form onSubmit={onSubmit}>
          <DialogTitle>Send feedback</DialogTitle>
          <DialogContent>
            <ObjectField control={control} />
            <EmailField control={control} />
            <MessageField control={control} />
          </DialogContent>
          <DialogActions>
            <CancelButton handleClose={handleClose} />
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
