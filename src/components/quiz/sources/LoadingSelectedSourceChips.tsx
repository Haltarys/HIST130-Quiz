import { Chip, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { range } from 'src/utils';

function LoadingSelectedSourceChips() {
  return (
    <Grid container spacing={1} marginBottom={4}>
      {range(12).map((i) => (
        <Grid key={i} item>
          <Skeleton variant="text">
            <Chip label="Chapter X" />
          </Skeleton>
        </Grid>
      ))}
    </Grid>
  );
}

export default LoadingSelectedSourceChips;
