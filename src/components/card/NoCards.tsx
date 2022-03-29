import SailingIcon from '@mui/icons-material/Sailing';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';

function NoCardsMessage() {
  return (
    // Using Typography instead of Box because the color doesn't propagate otherwise.
    <Typography
      color="secondary"
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
      <SailingIcon color="secondary" sx={{ fontSize: 96 }} />
      <Typography variant="h4" color="secondary">
        Nothing favourites found.
      </Typography>
      <Typography variant="body1">
        Go to the{' '}
        <Link color="secondary" to="/" component={RouterLink}>
          homepage
        </Link>{' '}
        and click the{' '}
        <BookmarkAddOutlinedIcon
          color="action"
          fontSize="small"
          style={{ verticalAlign: 'text-top' }}
        />{' '}
        icon to add some definitions to your favourites.
      </Typography>
    </Typography>
  );
}

export default NoCardsMessage;
