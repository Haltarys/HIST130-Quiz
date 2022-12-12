import { createTheme } from '@mui/material/styles';
import indigo from '@mui/material/colors/indigo';
import blue from '@mui/material/colors/blue';

export default createTheme({
  palette: {
    primary: {
      main: indigo['900'],
      light: '#534bae',
      dark: '#000051',
    },
    secondary: {
      main: blue['500'],
      light: '#6ec6ff',
      dark: '#0069c0',
    },
  },
});
