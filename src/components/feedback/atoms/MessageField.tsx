import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FieldProps } from './fieldProps';

function MessageField({ control }: FieldProps) {
  return (
    <Controller
      control={control}
      name="message"
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          variant="outlined"
          id="message"
          label="Your message"
          type="text"
          required
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
