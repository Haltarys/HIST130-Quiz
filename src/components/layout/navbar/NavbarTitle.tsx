import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function NavbarTitle() {
  return (
    <Typography variant="h6" sx={{ flexGrow: 1 }} component="h1">
      <Link color="inherit" underline="none" component={RouterLink} to="/">
        HIST 130 Quiz
      </Link>
    </Typography>
  );
}

export default NavbarTitle;
