import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useChapters } from 'src/api/chapters';
import { useQuiz, useToggleSource } from 'src/features/quizSlice';
import LoadingSelectedSourceChips from './LoadingSelectedSourceChips';
import Error from 'src/components/error';
import SourceChip from './SourceChip';

function SelectedSourcesChips() {
  const { isLoading, error, data: chapters } = useChapters();
  const { selectedSources } = useQuiz();
  const toggleSource = useToggleSource();

  if (isLoading) return <LoadingSelectedSourceChips />;

  if (error) return <Error>{error.message}</Error>;

  return (
    <Grid container spacing={1} marginBottom={4}>
      <Grid item>
        <SourceChip
          helpText="Select all sources"
          label="All"
          checked={Object.values(selectedSources).every(
            (source) => source === true,
          )}
          handleToggle={() => toggleSource('all')}
        />
      </Grid>
      <Grid item>
        <Divider orientation="vertical" />
      </Grid>
      {chapters?.map((chapter) => (
        <Grid item key={chapter.id}>
          <SourceChip
            helpText={`Include definitions from ${chapter.title}: ${chapter.subtitle}`}
            label={chapter.title}
            checked={selectedSources[chapter.id]}
            handleToggle={() =>
              toggleSource(chapter.id, selectedSources[chapter.id])
            }
          />
        </Grid>
      ))}
      <Grid item>
        <Divider orientation="vertical" />
      </Grid>
      <Grid item>
        <SourceChip
          helpText="Include definitions from your favourited definitions"
          icon={<BookmarkIcon />}
          label="Favourites"
          checked={selectedSources.favourites}
          handleToggle={() =>
            toggleSource('favourites', selectedSources.favourites)
          }
        />
      </Grid>
    </Grid>
  );
}

export default SelectedSourcesChips;
