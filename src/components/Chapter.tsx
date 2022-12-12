import { Chapter as ChapterType, useDefinitions } from 'src/api';
import ChapterHeader from './ChapterHeader';
import Collection from './Collection';
import DefinitionCard from './DefinitionCard';

interface ChapterProps {
  chapter: ChapterType;
}

function Chapter({ chapter }: ChapterProps) {
  const { isLoading, error, data: definitions } = useDefinitions(chapter.id);

  if (isLoading) return <div>loading definitions for {chapter.title}...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Collection header={<ChapterHeader chapter={chapter} />}>
      {definitions?.map((definition) => (
        <DefinitionCard
          key={definition.id}
          definition={definition}
          subheader={`${chapter.title} (page ${definition.pageNumber})`}
          isFavourite={Math.random() < 0.5}
          onBookmark={() => {}}
        />
      ))}
    </Collection>
  );
}

export default Chapter;
