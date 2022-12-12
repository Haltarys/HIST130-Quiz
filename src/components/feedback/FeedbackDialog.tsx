import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FeedbackFormData, sendFeedback } from 'src/api';
import {
  CancelButton,
  EmailField,
  MessageField,
  ObjectField,
  SubmitButton,
} from './atoms';

interface FeedbackDialogProps {
  open: boolean;
  handleClose: () => void;
}

function FeedbackDialog({ open, handleClose }: FeedbackDialogProps) {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, reset, formState } = useForm<FeedbackFormData>(
    {
      mode: 'onBlur',
      reValidateMode: 'onBlur',
    },
  );

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    console.log(formState);

    await sendFeedback(data);

    // handleClose();
    setLoading(false);
    reset();
  });

  return (
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
  );
}

export default FeedbackDialog;
