import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TitleIcon from '@mui/icons-material/Title';

interface FeedbackDialogProps {
  open: boolean;
  handleClose: () => void;
}

function FeedbackDialog({ open, handleClose }: FeedbackDialogProps) {
  const [loading, setLoading] = useState(false);

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
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          setLoading(true);
          await new Promise((resolve) => setTimeout(resolve, 3000));
          handleClose();
          setLoading(false);
        }}
      >
        <DialogTitle>Send feedback</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            id="feedback-object"
            label="Object"
            type="text"
            required
            placeholder="Bug report, feature request, just saying hi..."
            autoFocus
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            id="feedback-email"
            label="Email address (optional)"
            type="email"
            placeholder="Only required if you want me to get back to you."
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            id="feedback-message"
            label="Your message"
            type="text"
            required
            multiline
            rows={8}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <LoadingButton
            type="submit"
            variant="contained"
            startIcon={<SendIcon />}
            loading={loading}
            loadingPosition="start"
          >
            Send
          </LoadingButton>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default FeedbackDialog;
