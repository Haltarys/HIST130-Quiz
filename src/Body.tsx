import { Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Reference from 'src/pages/Reference';
import Favourites from 'src/pages/Favourites';
import Quiz from 'src/pages/Quiz';
import MySwipeableRoutes from './components/MySwipeableRoutes';

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
      <MySwipeableRoutes>
        <Route path="/" element={<Reference />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/quiz" element={<Quiz />} />
      </MySwipeableRoutes>
    </Container>
  );
}

export default Body;
