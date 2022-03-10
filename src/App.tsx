import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CodeIcon from '@mui/icons-material/Code';
import FeedbackIcon from '@mui/icons-material/Feedback';

function App() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          HIST 130 Quiz
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Made with love ❤️ by Haltarys!
        </Typography>
        <Tooltip title="Send Feedback">
          <IconButton size="large" color="inherit">
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
    </AppBar>
  );
}

export default App;
