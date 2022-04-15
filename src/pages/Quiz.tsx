import {
  ListItemText,
  MenuItem,
  MenuList,
  Switch,
  Tooltip,
} from '@mui/material';
import Box from '@mui/system/Box';
import { useChapters } from 'src/api/chapters';
import {
  useSelectedChapters,
  useToggleChapter,
} from 'src/features/selectedChaptersSlice';

function Quiz() {
  const { isLoading, error, data: chapters } = useChapters();
  const selectedChapters = useSelectedChapters();
  const toggleChapter = useToggleChapter();

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box
      height="100%"
      display="grid"
      sx={{
        placeItems: 'center',
      }}
    >
      <MenuList>
        {chapters?.map((chapter) => {
          return (
            <Tooltip
              key={chapter.id}
              placement="right"
              title={`${chapter.title}: ${chapter.subtitle}`}
            >
              <MenuItem>
                <ListItemText>{chapter.title}</ListItemText>
                <Switch
                  checked={selectedChapters[chapter.id] || false}
                  onChange={() =>
                    toggleChapter(
                      chapter.id,
                      selectedChapters[chapter.id] || false,
                    )
                  }
                  edge="end"
                />
              </MenuItem>
            </Tooltip>
          );
        })}
      </MenuList>
    </Box>
  );
}

export default Quiz;
