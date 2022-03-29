import { Typography } from '@mui/material';
import type { Chapter as ChapterType } from 'src/api';

interface ChapterHeaderProps {
  chapter: ChapterType;
}

function ChapterHeader({ chapter }: ChapterHeaderProps) {
  return (
    <>
      <Typography variant="h4">
        {chapter.title}: {chapter.subtitle}
      </Typography>
      <Typography variant="body1">
        {chapter.period} (page {chapter.pageNumber})
      </Typography>
    </>
  );
}

export default ChapterHeader;
