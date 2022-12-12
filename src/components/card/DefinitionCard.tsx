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
import type { Definition as DefinitionType, ID } from 'src/api';

interface DefinitionCardProps {
  definition: DefinitionType;
  subheader?: string | undefined;
  isFavourite: boolean;
  onBookmark: (id: ID, isFavourite: boolean) => unknown;
}

function DefinitionCard({
  definition,
  subheader,
  isFavourite,
  onBookmark,
}: DefinitionCardProps) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ backgroundColor: grey['100'] }}>
        <CardHeader title={definition.term} subheader={subheader} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {
              // TODO: remove lorem ipsum
              definition.text ||
                'lorem ipsum dolor sit amet conspicing delectetur.'
            }
          </Typography>
        </CardContent>
        <CardActions>
          <Tooltip
            title={isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
          >
            <IconButton
              size="large"
              onClick={() => onBookmark(definition.id, isFavourite)}
              color={isFavourite ? 'secondary' : 'default'}
            >
              {isFavourite ? (
                <BookmarkIcon fontSize="large" />
              ) : (
                <BookmarkAddOutlinedIcon fontSize="large" />
              )}
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default DefinitionCard;
