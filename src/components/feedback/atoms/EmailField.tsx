import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { FieldProps } from './fieldProps';

function EmailField({ control }: FieldProps) {
  return (
    <Controller
      control={control}
      name="email"
      defaultValue=""
      render={({ field, fieldState: { invalid, error } }) => (
        <TextField
          {...field}
          variant="outlined"
          label="Email address (optional)"
          type="email"
          placeholder="Only required if you want me to get back to you."
          error={invalid}
          helperText={invalid && error}
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
