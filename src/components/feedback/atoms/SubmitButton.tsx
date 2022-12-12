import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

interface SubmitButtonProps {
  loading: boolean;
}

function SubmitButton({ loading }: SubmitButtonProps) {
  return (
    <LoadingButton
      type="submit"
      variant="contained"
      startIcon={<SendIcon />}
      loading={loading}
      loadingPosition="start"
    >
      Send
    </LoadingButton>
  );
}

export default SubmitButton;
