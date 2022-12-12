import { Link as RouterLink, useLocation } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

function NavTabs() {
  const location = useLocation();

  return (
    <Tabs
      value={location.pathname}
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
    </Tabs>
  );
}

export default NavTabs;
