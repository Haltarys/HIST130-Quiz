import Box from '@mui/system/Box';
import SelectedChaptersMenu from 'src/components/quiz/SelectedChaptersMenu';

function Quiz() {
  return (
    <Box
      height="100%"
      display="grid"
      sx={{
        placeItems: 'center',
      }}
    >
      <SelectedChaptersMenu />
    </Box>
  );
}

export default Quiz;
