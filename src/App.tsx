import Box from '@mui/material/Box';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Body, Navbar } from './components/layout';

function App() {
  return (
    // CSS magic to put the scrollbar under the navbar and not next to it
    <Box display="flex" flexDirection="column" height="100%">
      <Navbar />
      <Box
        display="flex"
        height="100%"
        flex={1}
        sx={{
          overflowY: 'auto',
          flexFlow: 'column',
        }}
      >
        <Body />
      </Box>
      {/* React Query is so dope: it is only included in development mode */}
      <ReactQueryDevtools />
    </Box>
  );
}

export default App;
