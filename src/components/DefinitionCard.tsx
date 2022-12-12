import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import grey from '@mui/material/colors/grey';

interface DefinitionCardProps {
  id: string | number;
  title: string;
  subheader: string;
  text: string;
  isFavourite: boolean;
  onBookmark: (id: string | number, isFavourite: boolean) => unknown;
}

function DefinitionCard({
  id,
  title,
  subheader,
  text,
  isFavourite,
  onBookmark,
}: DefinitionCardProps) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ backgroundColor: grey['100'] }}>
        <CardHeader title={title} subheader={subheader} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Tooltip
            title={isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
          >
            <IconButton
              onClick={() => onBookmark(id, isFavourite)}
              color={isFavourite ? 'secondary' : 'default'}
            >
              {isFavourite ? <BookmarkIcon /> : <BookmarkAddOutlinedIcon />}
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default DefinitionCard;
