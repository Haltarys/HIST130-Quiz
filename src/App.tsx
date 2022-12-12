// import Box from '@mui/material/Box';
import { ReactQueryDevtools } from 'react-query/devtools';
import Header from './Header';
import Body from './Body';

function App() {
  return (
    // CSS magic to put the scrollbar under the navbar and not next to it
    // <Box display="flex" flexDirection="column" height="100vh">
    <>
      <Header />
      <Body />
      {/* React Query is so dope: it is only included in development mode */}
      <ReactQueryDevtools />
    </>
    // </Box>
  );
}

export default App;
