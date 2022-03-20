import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CodeIcon from '@mui/icons-material/Code';
import FeedbackIcon from '@mui/icons-material/Feedback';
import NavTabs from 'src/components/NavTabs';

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} component="h1">
          <Link color="inherit" underline="none" component={RouterLink} to="/">
            HIST 130 Quiz
          </Link>
        </Typography>
        <Typography variant="subtitle1" component="h2" sx={{ flexGrow: 1 }}>
          Made with ❤️ by Haltarys!
        </Typography>
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
        <Tooltip title="View the source code on Github!">
          <IconButton
            size="large"
            color="inherit"
            href="https://github.com/Haltarys/HIST130-Quiz"
            target="_blank"
          >
            <CodeIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <NavTabs />
    </AppBar>
  );
}

export default Header;
