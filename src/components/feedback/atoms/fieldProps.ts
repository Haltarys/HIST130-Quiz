import { Control } from 'react-hook-form';
import { FeedbackFormData } from 'src/api/feedback';

export interface FieldProps {
  control: Control<FeedbackFormData>;
}
