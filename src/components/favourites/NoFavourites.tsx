import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SailingIcon from '@mui/icons-material/Sailing';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';

function NoFavourites() {
  return (
    <Box
      height="100%"
      display="grid"
      textAlign="center"
      sx={{ placeItems: 'center' }}
    >
      {/* Using Typography instead of Box because the color doesn't propagate
    otherwise. */}
      <Typography
        color="secondary"
        // Rendered as a div because React complains that headers (<h6>) must not be rendered inside a <p> tag (default value.)
        component="div"
        padding={2}
      >
        <SailingIcon color="secondary" sx={{ fontSize: 96 }} />
        <Typography variant="h4" color="secondary">
          Nothing favourites found.
        </Typography>
        <Typography variant="body1">
          Go to the{' '}
          <Link
            color="secondary"
            to="/"
            component={RouterLink}
            sx={{ fontWeight: 'bold' }}
          >
            Reference
          </Link>{' '}
          page and click the{' '}
          <BookmarkAddOutlinedIcon
            color="action"
            fontSize="small"
            style={{ verticalAlign: 'text-top' }}
          />{' '}
          icon to add some definitions to your favourites.
        </Typography>
      </Typography>
    </Box>
  );
}

export default NoFavourites;
