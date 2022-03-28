import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface CollectionProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

function Collection({ header, children }: CollectionProps) {
  return (
    <Grid
      container
      spacing={2}
      padding={2}
      // must be twice as much at the bottom for some reason
      paddingBottom={4}
    >
      <Grid item xs={12}>
        {typeof header === 'string' ? (
          <Typography variant="h4">{header}</Typography>
        ) : (
          header
        )}
      </Grid>
      {children}
    </Grid>
  );
}
export default Collection;
