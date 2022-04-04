import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import CollectionHeader from './CollectionHeader';

interface CollectionProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

function Collection({ header, children }: CollectionProps) {
  return (
    <Grid container spacing={2} paddingBottom={3}>
      <Grid item xs={12}>
        <CollectionHeader header={header} />
      </Grid>
      {children}
    </Grid>
  );
}
export default Collection;
