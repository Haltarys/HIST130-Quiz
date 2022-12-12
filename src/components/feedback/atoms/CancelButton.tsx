import Button from '@mui/material/Button';

interface CancelButtonProps {
  handleClose: () => void;
}

function CancelButton({ handleClose }: CancelButtonProps) {
  return (
    <Button variant="outlined" onClick={handleClose}>
      Cancel
    </Button>
  );
}

export default CancelButton;
