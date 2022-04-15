import type { Chapter as ChapterType } from 'src/api/types';
import { useDefinitions } from 'src/api/definitions';
import {
  useFavouriteIDs,
  useToggleFavourite,
} from 'src/features/favouritesSlice';
import DefinitionCard, { Collection } from 'src/components/card';
import Error from 'src/components/error';
import ChapterHeader from './ChapterHeader';
import { LoadingCardList } from 'src/components/loading';

interface ChapterProps {
  chapter: ChapterType;
}

function Chapter({ chapter }: ChapterProps) {
  const { isLoading, error, data: definitions } = useDefinitions(chapter.id);
  const favouriteIDs = useFavouriteIDs();
  const toggleFavourite = useToggleFavourite();

  if (error) return <Error>{error.message}</Error>;

  return (
    <Collection header={<ChapterHeader chapter={chapter} />}>
      {isLoading ? (
        <LoadingCardList />
      ) : (
        definitions?.map((definition) => (
          <DefinitionCard
            key={definition.id}
            definition={definition}
            subheader={`${chapter.title} (page ${definition.pageNumber})`}
            isFavourite={favouriteIDs.includes(definition.id)}
            onBookmark={toggleFavourite}
          />
        ))
      )}
    </Collection>
  );
}

export default Chapter;
