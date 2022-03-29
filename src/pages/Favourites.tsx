import { useDefinitions } from 'src/api';
import { useStore } from 'src/store';
import Error from 'src/components/error';
import DefinitionCard, { Collection } from 'src/components/card';
import { LoadingCardList } from 'src/components/loading';
import { NoCards } from 'src/components/card';

function Favourites() {
  const { isLoading, error, data: definitions } = useDefinitions();
  const { favouriteIDs, onBookmark } = useStore();

  const favourites = definitions?.filter((definition) =>
    favouriteIDs.includes(definition.id),
  );

  if (error) return <Error>{error?.message}</Error>;

  return (
    <Collection header="Favourites">
      {isLoading ? (
        <LoadingCardList />
      ) : favourites && favourites.length > 0 ? (
        favourites.map((definition) => (
          <DefinitionCard
            key={definition.id}
            definition={definition}
            subheader={`${
              // TODO: get chapter title somehow
              'chapter.title'
            } (page ${definition.pageNumber})`}
            isFavourite={favouriteIDs.includes(definition.id)}
            onBookmark={onBookmark}
          />
        ))
      ) : (
        <NoCards />
      )}
    </Collection>
  );
}

export default Favourites;
