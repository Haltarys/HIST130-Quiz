import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FeedbackIcon from '@mui/icons-material/Feedback';

interface FeedbackButtonProps {
  handleClick: () => void;
}

function FeedbackButton({ handleClick }: FeedbackButtonProps) {
  return (
    <Tooltip title="Send Feedback">
      <IconButton size="large" color="inherit" onClick={handleClick}>
        <FeedbackIcon />
      </IconButton>
    </Tooltip>
  );
}

export default FeedbackButton;
