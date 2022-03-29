import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Typography from '@mui/material/Typography';

interface ErrorProps {
  children: React.ReactNode;
}

function Error({ children }: ErrorProps) {
  return (
    // Using Typography instead of Box because the color doesn't propagate otherwise.
    <Typography
      color="error"
      // Rendered as a div because React complains that headers (<h6>) must not be rendered inside a <p> tag (default value.)
      component="div"
      sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <SentimentVeryDissatisfiedIcon color="error" sx={{ fontSize: 96 }} />
      <Typography variant="h4" color="error">
        An error occurred:
      </Typography>
      {children || 'Unknown error.'}
    </Typography>
  );
}

export default Error;
