import Typography from '@mui/material/Typography';
import type { Definition } from 'src/api/types';

interface DefinitionTextProps {
  definition: Definition | undefined;
}

function DefinitionText({ definition }: DefinitionTextProps) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Definition
      </Typography>
      {definition ? (
        <Typography variant="body1" marginBottom={4} height="128px">
          {definition.text}
        </Typography>
      ) : (
        <Typography
          variant="body1"
          component="div"
          marginBottom={4}
          height="128px"
          display="grid"
          sx={{ placeItems: 'center', textAlign: 'center' }}
        >
          <div>
            <Typography fontWeight="bold">Nothing to show here!</Typography>
            <Typography>
              Select some sources from above and click the "New random
              definition" button below.
            </Typography>
          </div>
        </Typography>
      )}
    </>
  );
}

export default DefinitionText;
