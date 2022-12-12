import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {
  NavbarHeader,
  NavbarTabs,
  NavbarTitle,
  SourceCodeButton,
} from 'src/components/navbar';
import Feedback from 'src/components/feedback';

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
