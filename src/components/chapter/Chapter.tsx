import type { Chapter as ChapterType } from 'src/api';
import { useDefinitions } from 'src/api';
import { useStore } from 'src/store';
import DefinitionCard, { Collection } from 'src/components/card';
import Error from 'src/components/error';
import ChapterHeader from './ChapterHeader';
import { LoadingCardList } from 'src/components/loading';

interface ChapterProps {
  chapter: ChapterType;
}

function Chapter({ chapter }: ChapterProps) {
  const { isLoading, error, data: definitions } = useDefinitions(chapter.id);
  const { favouriteIDs, onBookmark } = useStore();

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
            onBookmark={onBookmark}
          />
        ))
      )}
    </Collection>
  );
}

export default Chapter;
