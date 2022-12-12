import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

interface QuizActionsProps {
  handleClick: () => void;
}

function QuizActions({ handleClick }: QuizActionsProps) {
  return (
    <CardActions>
      <Button variant="outlined" fullWidth onClick={handleClick}>
        New random definition
      </Button>
      <Button type="submit" variant="contained" fullWidth>
        Submit
      </Button>
    </CardActions>
  );
}

export default QuizActions;
