import type { Chapter as ChapterType } from 'src/api';
import { useDefinitions } from 'src/api';
import { useStore } from 'src/store';
import DefinitionCard, { Collection } from 'src/components/card';
import ChapterHeader from './ChapterHeader';
import { LoadingDefinitionCard } from 'src/components/loading';
import { range } from 'src/utils';

interface ChapterProps {
  chapter: ChapterType;
  numberOfPlaceholders?: number;
}

function Chapter({ chapter, numberOfPlaceholders = 12 }: ChapterProps) {
  const { isLoading, error, data: definitions } = useDefinitions(chapter.id);
  const { favouriteIDs, onBookmark } = useStore();

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Collection header={<ChapterHeader chapter={chapter} />}>
      {isLoading
        ? range(numberOfPlaceholders).map((_, i) => (
            <LoadingDefinitionCard key={i} />
          ))
        : definitions?.map((definition) => (
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
