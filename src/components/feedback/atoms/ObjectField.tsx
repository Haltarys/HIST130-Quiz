import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import TitleIcon from '@mui/icons-material/Title';
import { FieldProps } from './fieldProps';

function ObjectField({ control }: FieldProps) {
  return (
    <Controller
      control={control}
      name="object"
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          variant="outlined"
          id="object"
          label="Object"
          type="text"
          required
          placeholder="Bug report, feature request, just saying hi..."
          autoFocus
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TitleIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}

export default ObjectField;
