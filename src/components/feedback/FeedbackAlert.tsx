import Alert from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import type { FeedbackEmailResponse } from 'src/api/feedback';

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}

interface FeedbackAlertProps {
  feedback: FeedbackEmailResponse;
  clearFeedback: () => void;
}

function FeedbackAlert({
  feedback: { success, message },
  clearFeedback,
}: FeedbackAlertProps) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason !== 'clickaway') clearFeedback();
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open
      message={message}
      autoHideDuration={6000}
      TransitionComponent={SlideTransition}
      onClose={handleClose}
    >
      <Alert
        variant="filled"
        severity={success ? 'success' : 'error'}
        sx={{ width: '100%' }}
        onClose={handleClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default FeedbackAlert;
