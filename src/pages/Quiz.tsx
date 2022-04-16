import Box from '@mui/system/Box';
import { useDefinitions } from 'src/api/definitions';
import SelectedChaptersMenu from 'src/components/quiz/menu/SelectedChaptersMenu';
import RandomDefinition from 'src/components/quiz/RandomDefinition';

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
      {definitions !== undefined && (
        <RandomDefinition definitions={definitions} />
      )}
      <SelectedChaptersMenu />
    </Box>
  );
}

export default Quiz;
