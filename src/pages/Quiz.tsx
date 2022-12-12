import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDefinitions } from 'src/api/definitions';
import SelectedSourcesChips from 'src/components/quiz/sources/SelectedSourcesChips';
import RandomDefinition from 'src/components/quiz/form/RandomDefinition';

function Quiz() {
  const { isLoading, error, data: definitions } = useDefinitions();

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>Error:{error.message}...</div>;

  return (
    <Grid container height="100%" alignItems="center" justifyContent="center">
      <Grid item lg={8}>
        <Card>
          <CardHeader title="Quiz" />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Select which sources for the pool of definitions to draw from.
            </Typography>
            <SelectedSourcesChips />
            {definitions !== undefined && (
              <RandomDefinition definitions={definitions} />
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Quiz;
