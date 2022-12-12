import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FieldProps } from './fieldProps';

function MessageField({ control }: FieldProps) {
  return (
    <Controller
      control={control}
      name="message"
      defaultValue=""
      rules={{ required: true }}
      render={({ field, fieldState: { invalid } }) => (
        <TextField
          {...field}
          variant="outlined"
          label="Your message"
          type="text"
          required
          error={invalid}
          helperText={invalid && 'Let me know your thoughts.'}
          multiline
          rows={8}
          fullWidth
          margin="normal"
        />
      )}
    />
  );
}

export default MessageField;
