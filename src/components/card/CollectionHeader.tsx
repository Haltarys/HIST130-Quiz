import Typography from '@mui/material/Typography';
import { LoadingChapterHeader } from 'src/components/loading';

interface CollectionHeaderProps {
  header: React.ReactNode;
}

function CollectionHeader({ header }: CollectionHeaderProps) {
  return header === undefined ? (
    <LoadingChapterHeader />
  ) : typeof header === 'string' ? (
    <Typography variant="h4">{header}</Typography>
  ) : (
    // Must be surrounded with fragments, otherwise Typescript whines
    // I think the fragments make it explicit that it should be rendered
    <>{header}</>
  );
}

export default CollectionHeader;
