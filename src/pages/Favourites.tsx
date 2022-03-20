import Collection from 'src/components/Collection';
import DefinitionCard from 'src/components/DefinitionCard';

function Favourites() {
  return (
    <Collection header="Favourites">
      <DefinitionCard
        id={0}
        title="Title here"
        subheader="Subheader here"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eligendi, aliquam autem esse dignissimos, nemo quos impedit dolorem voluptatibus facilis, error eveniet libero adipisci neque nobis? Cum similique repellat a."
        isFavourite
        onBookmark={() => {}}
      />
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <DefinitionCard
            key={i + 1}
            id={i + 1}
            title="Title here"
            subheader="Subheader here"
            text="lorem ipsum dolor sit amet conspicing delectetur."
            isFavourite
            onBookmark={() => {}}
          />
        ))}
    </Collection>
  );
}

export default Favourites;
