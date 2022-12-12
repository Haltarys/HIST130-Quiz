import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { useOpenFeedbackDialog } from 'src/features/feedbackSlice';

function FeedbackButton() {
  const openFeedbackDialog = useOpenFeedbackDialog();

  return (
    <Tooltip title="Send Feedback">
      <IconButton size="large" color="inherit" onClick={openFeedbackDialog}>
        <FeedbackIcon />
      </IconButton>
    </Tooltip>
  );
}

export default FeedbackButton;
