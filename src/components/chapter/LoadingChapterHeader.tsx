import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

function LoadingChapterHeader() {
  return (
    <>
      <Skeleton variant="text">
        <Typography variant="h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Skeleton>
      <Skeleton variant="text">
        <Typography variant="body1">Lorem ipsum dolor sit.</Typography>
      </Skeleton>
    </>
  );
}

export default LoadingChapterHeader;
