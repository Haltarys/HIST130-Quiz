import { useDefinitions } from 'src/api/definitions';
import { useChapters } from 'src/api/chapters';
import {
  useFavouriteIDs,
  useToggleFavourite,
} from 'src/features/favouritesSlice';
import Error from 'src/components/error';
import DefinitionCard, { Collection } from 'src/components/card';
import { LoadingCardList } from 'src/components/loading';
import { NoFavourites } from 'src/components/card';

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
  const areThereFavouritesSaved = favourites && favourites.length > 0;

  if (error) return <Error>{error?.message}</Error>;
  if (chapterError) return <Error>{chapterError?.message}</Error>;

  return (
    <Collection header={areThereFavouritesSaved && 'Favourites'}>
      {isLoading || areChaptersLoading ? (
        <LoadingCardList />
      ) : areThereFavouritesSaved ? (
        favourites.map((definition) => {
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
        })
      ) : (
        <NoFavourites />
      )}
    </Collection>
  );
}

export default Favourites;
