import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FeedbackIcon from '@mui/icons-material/Feedback';
import {
  NavbarHeader,
  NavbarTabs,
  NavbarTitle,
  SourceCodeButton,
} from 'src/components/navbar';

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <NavbarTitle />
        <NavbarHeader />
        <Tooltip title="Send Feedback">
          <IconButton
            size="large"
            color="inherit"
            component={RouterLink}
            to="/feedback"
          >
            <FeedbackIcon />
          </IconButton>
        </Tooltip>
        <SourceCodeButton />
      </Toolbar>
      <NavbarTabs />
    </AppBar>
  );
}

export default Navbar;
