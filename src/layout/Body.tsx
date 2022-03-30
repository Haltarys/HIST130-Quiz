import { Navigate, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
// import Routes from 'src/components/routes';
import { Favourites, NotFound, Quiz, Reference } from 'src/pages';

function Body() {
  return (
    <Container
      maxWidth="xl"
      component="main"
      // CSS magic to put the scrollbar under the navbar and not next to it
      sx={{
        // use padding instead of margin to make the scrollbar stretch all the way
        paddingY: 2,
        flex: 1,
        overflowY: 'auto',
      }}
    >
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Reference />} />
        <Route path="/favourites" element={<Favourites />} />
        {/* Gotta be considerate of our Yankee friends */}
        <Route
          path="/favorites"
          element={<Navigate to="/favourites" replace />}
        />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Container>
  );
}

export default Body;
