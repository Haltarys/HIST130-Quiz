import { Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import SwipeableRoutes from 'src/components/SwipeableRoutes';
import Reference from 'src/pages/Reference';
import Favourites from 'src/pages/Favourites';
import Quiz from 'src/pages/Quiz';

function Body() {
  return (
    <Container
      maxWidth="xl"
      sx={{ marginTop: 1 }} // To leave some room for the Appbar's shadow
      component="main"
    >
      <SwipeableRoutes>
        <Route path="/" element={<Reference />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/quiz" element={<Quiz />} />
      </SwipeableRoutes>
    </Container>
  );
}

export default Body;
