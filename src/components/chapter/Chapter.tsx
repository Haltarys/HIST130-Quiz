import type { Chapter as ChapterType } from 'src/api/types';
import { useDefinitions } from 'src/api/definitions';
import {
  useFavouriteIDs,
  useToggleFavourite,
} from 'src/features/favouritesSlice';
import LoadingCollection from 'src/components/collection/LoadingCollection';
import Error from 'src/components/error';
import Collection from 'src/components/collection/Collection';
import ChapterHeader from './ChapterHeader';
import DefinitionCard from 'src/components/card/DefinitionCard';

interface ChapterProps {
  chapter: ChapterType;
}

function Chapter({ chapter }: ChapterProps) {
  const { isLoading, error, data: definitions } = useDefinitions(chapter.id);
  const favouriteIDs = useFavouriteIDs();
  const toggleFavourite = useToggleFavourite();

  if (isLoading) return <LoadingCollection />;

  if (error) return <Error>{error.message}</Error>;

  return (
    <Collection header={<ChapterHeader chapter={chapter} />}>
      {definitions?.map((definition) => (
        <DefinitionCard
          key={definition.id}
          definition={definition}
          subheader={`${chapter.title} (page ${definition.pageNumber})`}
          isFavourite={favouriteIDs.includes(definition.id)}
          onBookmark={toggleFavourite}
        />
      ))}
    </Collection>
  );
}

export default Chapter;
