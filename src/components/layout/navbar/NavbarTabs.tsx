import { Link as RouterLink, useLocation } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

function NavbarTabs() {
  const location = useLocation();

  const value = ['/', '/favourites', '/quiz', '/about'].includes(
    location.pathname,
  )
    ? location.pathname
    : false;

  return (
    <Tabs
      value={value}
      indicatorColor="secondary"
      variant="fullWidth"
      textColor="inherit"
      component="nav"
    >
      <Tab value="/" label="Reference" component={RouterLink} to="/" />
      <Tab
        value="/favourites"
        label="Favourites"
        component={RouterLink}
        to="/favourites"
      />
      <Tab value="/quiz" label="Quiz" component={RouterLink} to="/quiz" />
      <Tab value="/about" label="About" component={RouterLink} to="/about" />
    </Tabs>
  );
}

export default NavbarTabs;
