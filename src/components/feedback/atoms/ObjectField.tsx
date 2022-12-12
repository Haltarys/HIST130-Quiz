import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FieldProps } from './fieldProps';

function ObjectField({ control }: FieldProps) {
  return (
    <Controller
      control={control}
      name="object"
      // Typescript complains that it's not one of the expected types but it's fine
      // @ts-ignore
      defaultValue=""
      rules={{ required: true }}
      render={({ field, fieldState: { invalid } }) => (
        <TextField
          {...field}
          variant="outlined"
          label="Object"
          select
          required
          placeholder="Select a type of feedback"
          error={invalid}
          helperText={invalid && 'Please select a type of feedback'}
          fullWidth
          margin="normal"
        >
          <MenuItem value="feature">Feature request</MenuItem>
          <MenuItem value="bug">Bug report</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </TextField>
      )}
    />
  );
}

export default ObjectField;
