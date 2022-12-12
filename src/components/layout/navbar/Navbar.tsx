import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Feedback from 'src/components/feedback/Feedback';
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
        <Feedback />
        <SourceCodeButton />
      </Toolbar>
      <NavbarTabs />
    </AppBar>
  );
}

export default Navbar;
