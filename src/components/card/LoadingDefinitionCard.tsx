import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import grey from '@mui/material/colors/grey';

function LoadingDefinitionCard() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ backgroundColor: grey['100'] }}>
        <CardHeader
          title={
            <Skeleton variant="text">
              <Typography variant="h5">Lorem ipsum dolor sit.</Typography>
            </Skeleton>
          }
          subheader={
            <Skeleton variant="text">
              <Typography variant="body1">Lorem, ipsum dolor.</Typography>
            </Skeleton>
          }
        />
        <CardContent>
          <Skeleton variant="text">
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              sapiente soluta aliquid porro rem sunt molestiae neque,
              consectetur rerum harum atque molestias hic quidem cum.
            </Typography>
          </Skeleton>
        </CardContent>
        <CardActions>
          {/* 59 is the size of a large icon button (I looked it up with Firefox's devtools) */}
          <Skeleton variant="circular" width={59} height={59}></Skeleton>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default LoadingDefinitionCard;
