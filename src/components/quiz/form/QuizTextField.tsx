import { Control, Controller } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { QuizFormData } from './quizFormData';

interface QuizTextFieldProps {
  control: Control<QuizFormData>;
  clearError: () => void;
  definitionRegex: RegExp;
  handleRevealSolution: () => void;
}

function QuizTextField({
  control,
  clearError,
  handleRevealSolution,
  definitionRegex,
}: QuizTextFieldProps) {
  return (
    <Controller
      control={control}
      name="definitionTermAttempt"
      defaultValue=""
      rules={{
        required: true,
        pattern: definitionRegex,
      }}
      render={({
        field: { ref, onChange, ...rest },
        fieldState: { invalid },
      }) => (
        <TextField
          {...rest}
          inputRef={ref} // otherwise, the focus on solution reveal, doesen't work
          variant="outlined"
          fullWidth
          autoFocus
          onChange={(e) => {
            clearError();
            onChange(e);
          }}
          sx={{ marginBottom: 4 }}
          placeholder="Type in the term that you think matches the above definition."
          error={invalid}
          helperText={invalid && 'Your answer is incorrect'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Tooltip title="Click to reveal the solution">
                  <IconButton onClick={handleRevealSolution}>
                    <VisibilityIcon color="primary" />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}

export default QuizTextField;
