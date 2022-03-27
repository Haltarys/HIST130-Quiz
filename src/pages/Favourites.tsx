// import { useFavourites } from 'src/api';
import { useDefinitions } from 'src/api';
import { useStore } from 'src/store';
import Collection from 'src/components/Collection';
import DefinitionCard from 'src/components/DefinitionCard';

function Favourites() {
  const { isLoading, error, data: definitions } = useDefinitions();
  const { favouriteIDs, onBookmark } = useStore();

  const favourites = definitions?.filter((definition) =>
    favouriteIDs.includes(definition.id),
  );

  if (isLoading) return <div>loading favourite definitions...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Collection header="Favourites">
      {favourites === undefined ? (
        <div>loading...</div>
      ) : (
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
      )}
    </Collection>
  );
}

export default Favourites;
