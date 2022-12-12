import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { FieldProps } from './fieldProps';

// From the MDN documentation: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function EmailField({ control }: FieldProps) {
  return (
    <Controller
      control={control}
      name="email"
      defaultValue=""
      rules={{ required: false, pattern: emailRegex }}
      render={({ field, fieldState: { invalid } }) => (
        <TextField
          {...field}
          variant="outlined"
          label="Email address (optional)"
          type="email"
          placeholder="Only required if you want me to reach back."
          error={invalid}
          helperText={invalid && 'Invalid email address'}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}

export default EmailField;
