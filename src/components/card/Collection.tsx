import Grid from '@mui/material/Grid';
import CollectionHeader from './CollectionHeader';

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
      // must be twice as much at the bottom to look nice for some reason
      paddingBottom={4}
    >
      <Grid item xs={12}>
        <CollectionHeader header={header} />
      </Grid>
      {children}
    </Grid>
  );
}
export default Collection;
