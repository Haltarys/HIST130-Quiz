import Error from 'src/components/error';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

function NotFound() {
  return (
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
  );
}

export default NotFound;
