import MenuList from '@mui/material/MenuList';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import { useChapters } from 'src/api/chapters';
import {
  useSelectedChapters,
  useToggleChapter,
} from 'src/features/selectedChaptersSlice';

function SelectedChaptersMenu() {
  const { isLoading, error, data: chapters } = useChapters();
  const selectedChapters = useSelectedChapters();
  const toggleChapter = useToggleChapter();

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
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
  );
}

export default SelectedChaptersMenu;
