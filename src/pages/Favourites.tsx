import { useDefinitions } from 'src/api/definitions';
import { useChapters } from 'src/api/chapters';
import {
  useFavouriteIDs,
  useToggleFavourite,
} from 'src/features/favouritesSlice';
import LoadingCollection from 'src/components/collection/LoadingCollection';
import Error from 'src/components/error';
import NoFavourites from 'src/components/favourites/NoFavourites';
import Collection from 'src/components/collection/Collection';
import DefinitionCard from 'src/components/card/DefinitionCard';

function Favourites() {
  const { isLoading, error, data: definitions } = useDefinitions();
  const {
    isLoading: areChaptersLoading,
    error: chapterError,
    data: chapters,
  } = useChapters();
  const favouriteIDs = useFavouriteIDs();
  const toggleFavourite = useToggleFavourite();

  const favourites = definitions?.filter((definition) =>
    favouriteIDs.includes(definition.id),
  );

  if (isLoading || areChaptersLoading) return <LoadingCollection />;

  if (error) return <Error>{error?.message}</Error>;
  if (chapterError) return <Error>{chapterError?.message}</Error>;

  if (!favourites || favourites.length === 0) return <NoFavourites />;

  return (
    <Collection header="Favourites">
      {favourites.map((definition) => {
        const chapterTitle = chapters?.find(
          (chapter) => chapter.id === definition.chapterId,
        )?.title;

        return (
          <DefinitionCard
            key={definition.id}
            definition={definition}
            subheader={`${chapterTitle} (page ${definition.pageNumber})`}
            isFavourite={favouriteIDs.includes(definition.id)}
            onBookmark={toggleFavourite}
          />
        );
      })}
    </Collection>
  );
}

export default Favourites;
