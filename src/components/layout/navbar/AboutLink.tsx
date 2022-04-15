import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink } from 'react-router-dom';
import HelpIcon from '@mui/icons-material/Help';

function AboutLink() {
  return (
    <Tooltip title="About this website">
      <IconButton
        size="large"
        color="inherit"
        component={RouterLink}
        to="/about"
      >
        <HelpIcon />
      </IconButton>
    </Tooltip>
  );
}

export default AboutLink;
