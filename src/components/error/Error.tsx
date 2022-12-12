import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

interface ErrorProps {
  children: React.ReactNode;
}

function Error({ children }: ErrorProps) {
  return (
    <Box height="100%" display="grid" sx={{ placeItems: 'center' }}>
      {/* Using Typography instead of Box because the color doesn't propagate otherwise. */}
      <Typography
        color="error"
        // Rendered as a div because React complains that headers (<h6>) must not be rendered inside a <p> tag (default value.)
        component="div"
        textAlign="center"
      >
        <SentimentVeryDissatisfiedIcon color="error" sx={{ fontSize: 96 }} />
        <Typography variant="h4" color="error">
          An error occurred:
        </Typography>
        {children || 'Unknown error.'}
      </Typography>
    </Box>
  );
}

export default Error;
