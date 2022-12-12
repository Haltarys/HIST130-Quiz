import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';

function SourceCodeButton() {
  return (
    <Tooltip title="View the source code on Github!">
      <IconButton
        size="large"
        color="inherit"
        href="https://github.com/Haltarys/HIST130-Quiz"
        target="_blank"
        rel="norefferer noopener"
      >
        <CodeIcon />
      </IconButton>
    </Tooltip>
  );
}

export default SourceCodeButton;
