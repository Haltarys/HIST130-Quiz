import { Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Routes from 'src/components/routes';
import { Favourites, Quiz, Reference } from 'src/pages';

function Body() {
  return (
    <Container
      maxWidth="xl"
      component="main"
      // CSS magic to put the scrollbar under the navbar and not next to it
      // sx={{ flex: 1, overflowY: 'auto' }}
    >
      {/* <Routes>
        <Route path="/" element={<Reference />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<Reference />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Container>
  );
}

export default Body;
