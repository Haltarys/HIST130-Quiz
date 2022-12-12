import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import { range } from 'src/utils';
import { Skeleton } from '@mui/material';

function LoadingSelectedChaptersMenu() {
  return (
    <MenuList>
      {range(8).map((i) => {
        return (
          <MenuItem key={i}>
            <Skeleton>
              <ListItemText>Lorem, ipsum.</ListItemText>
            </Skeleton>
            <Switch edge="end" />
          </MenuItem>
        );
      })}
    </MenuList>
  );
}

export default LoadingSelectedChaptersMenu;
