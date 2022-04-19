import { Control, Controller } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { QuizFormData } from './quizFormData';

interface QuizTextFieldProps {
  control: Control<QuizFormData>;
}

function QuizTextField({ control }: QuizTextFieldProps) {
  const definitionRegex = /batman/;

  return (
    <Controller
      control={control}
      name="keywordAttempt"
      defaultValue=""
      rules={{
        required: true,
        // TODO: add regex for every definition
        pattern: definitionRegex,
      }}
      render={({ field, fieldState: { invalid } }) => (
        <TextField
          {...field}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 4 }}
          placeholder="Try to guess the definition's keyword here."
          error={invalid}
          helperText={invalid && 'Incorrect keyword'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Tooltip title="Click to reveal the solution">
                  <IconButton>
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
