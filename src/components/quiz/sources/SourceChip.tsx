import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';

interface SourceChipProps {
  helpText: string;
  icon?: React.ReactElement;
  label: string;
  checked: boolean;
  handleToggle: () => void;
}

function SourceChip({
  helpText,
  icon,
  label,
  checked,
  handleToggle,
}: SourceChipProps) {
  return (
    <Tooltip title={helpText}>
      <Chip
        icon={icon}
        label={label}
        color="primary"
        variant={checked ? 'filled' : 'outlined'}
        onClick={() => handleToggle()}
      />
    </Tooltip>
  );
}

export default SourceChip;
