import { Control } from 'react-hook-form';
import { FeedbackFormData } from 'src/api';

export interface FieldProps {
  control: Control<FeedbackFormData>;
}
