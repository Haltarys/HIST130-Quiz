// import { useFavourites } from 'src/api';
import Collection from 'src/components/Collection';
import DefinitionCard from 'src/components/DefinitionCard';

function Favourites() {
  return (
    <Collection header="Favourites">
      {/* {favourites === undefined ? (
        <div>loading...</div>
      ) : (
        [...favourites].map((fav, i) => (
          <DefinitionCard
            key={i + 1}
            definition={fav}
            subheader="Subheader here"
            isFavourite
            onBookmark={() => {}}
          />
        ))
      )} */}
    </Collection>
  );
}

export default Favourites;
