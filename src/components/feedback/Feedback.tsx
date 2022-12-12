import { useState } from 'react';
import FeedbackButton from './FeedbackButton';
import FeedbackDialog from './FeedbackDialog';

function Feedback() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <FeedbackButton handleClick={() => setOpen(true)} />
      <FeedbackDialog open={open} handleClose={() => setOpen(false)} />
    </>
  );
}

export default Feedback;
