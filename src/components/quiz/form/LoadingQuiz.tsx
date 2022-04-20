import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingQuiz() {
  return (
    <Grid container height="100%" alignItems="center" justifyContent="center">
      <Grid item>
        <CircularProgress size={128} />
      </Grid>
    </Grid>
  );
}

export default LoadingQuiz;
