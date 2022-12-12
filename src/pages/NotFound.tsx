import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Error from 'src/components/error';

function NotFound() {
  return (
    <Box
      height="100%"
      display="grid"
      sx={{
        placeItems: 'center',
      }}
    >
      <Error>
        <Typography variant="h6">Page not found.</Typography>
        <Typography variant="body1">
          Go to{' '}
          <Link
            color="error"
            to="/"
            component={RouterLink}
            sx={{ fontWeight: 'bold' }}
          >
            homepage
          </Link>
          .
        </Typography>
      </Error>
    </Box>
  );
}

export default NotFound;
