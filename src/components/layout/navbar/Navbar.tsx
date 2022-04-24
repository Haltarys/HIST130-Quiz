import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import FeedbackButton from 'src/components/feedback/FeedbackButton';
import AboutLink from './AboutLink';
import NavbarHeader from './NavbarHeader';
import NavbarTabs from './NavbarTabs';
import NavbarTitle from './NavbarTitle';
import SourceCodeButton from './SourceCodeButton';

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <NavbarTitle />
        <NavbarHeader />
        <FeedbackButton />
        <AboutLink />
        <SourceCodeButton />
      </Toolbar>
      <NavbarTabs />
    </AppBar>
  );
}

export default Navbar;
