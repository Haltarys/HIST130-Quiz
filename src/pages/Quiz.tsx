import Box from '@mui/system/Box';
import { useDefinitions } from 'src/api/definitions';
import SelectedChaptersMenu from 'src/components/quiz/menu/SelectedChaptersMenu';

function Quiz() {
  const { isLoading, error, data: definitions } = useDefinitions();

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>Error:{error.message}...</div>;

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
