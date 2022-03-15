import { useState } from 'react';
import {
  Link as RouterLink,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CodeIcon from '@mui/icons-material/Code';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';
import SwipeableRoutes from './SwipeableRoutes';

function App() {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link
              color="inherit"
              underline="none"
              component={RouterLink}
              to="/"
            >
              HIST 130 Quiz
            </Link>
          </Typography>
          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
            Made with love ❤️ by Haltarys!
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
        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          indicatorColor="secondary"
          variant="fullWidth"
          textColor="inherit"
        >
          <Tab value="/" label="Reference" component={RouterLink} to="/" />
          <Tab value="/quiz" label="Quiz" component={RouterLink} to="/quiz" />
        </Tabs>
      </AppBar>
      <Container>
        <SwipeableRoutes>
          {/* <div>reference</div>
          <div>quiz</div> */}
          <Route
            path="/"
            element={
              <div
                style={{
                  width: '800px',
                  height: '300px',
                  backgroundColor: 'salmon',
                }}
              >
                reference
              </div>
            }
          />
          <Route
            path="/quiz"
            element={
              <div
                style={{
                  width: '800px',
                  height: '300px',
                  backgroundColor: 'royalblue',
                }}
              >
                quiz
              </div>
            }
          />
          {/* <Route path="/" element="reference" />
          <Route path="/quiz" element="quiz" /> */}
        </SwipeableRoutes>
        {/* <SwipeableViews index={value} onChangeIndex={(i) => setValue(i)}>
          <div>batman</div>
          <div>joker</div>
        </SwipeableViews> */}
        {/* <SwipeableRoutes>
          <Route path="/">
            <div>batman</div>
          </Route>
          <Route path="/quiz">
            <div>quiz</div>
          </Route>
        </SwipeableRoutes> */}
      </Container>
    </>
  );
}

export default App;
