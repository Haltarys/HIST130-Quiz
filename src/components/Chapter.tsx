import { Chapter as ChapterType, useDefinitions } from 'src/api';
import { useStore } from 'src/store';
import ChapterHeader from './ChapterHeader';
import Collection from './Collection';
import DefinitionCard from './DefinitionCard';

interface ChapterProps {
  chapter: ChapterType;
}

function Chapter({ chapter }: ChapterProps) {
  const { isLoading, error, data: definitions } = useDefinitions(chapter.id);
  const { favouriteIDs, onBookmark } = useStore();

  if (isLoading) return <div>loading definitions for {chapter.title}...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Collection header={<ChapterHeader chapter={chapter} />}>
      {definitions?.map((definition) => (
        <DefinitionCard
          key={definition.id}
          definition={definition}
          subheader={`${chapter.title} (page ${definition.pageNumber})`}
          isFavourite={favouriteIDs.includes(definition.id)}
          onBookmark={onBookmark}
        />
      ))}
    </Collection>
  );
}

export default Chapter;
