import { useChapters } from 'src/api/chapters';
import Chapter from 'src/components/chapter/Chapter';
import Error from 'src/components/error';
import LoadingChapters from 'src/components/chapter/LoadingChapters';

function Reference() {
  const { isLoading, error, data: chapters } = useChapters();

  if (isLoading) return <LoadingChapters />;

  if (error) return <Error>{error.message}</Error>;

  return (
    // wrapped in a fragment, otherwise Typescript whines that the value may be undefined
    <>
      {chapters?.map((chapter) => (
        <Chapter key={chapter.id} chapter={chapter} />
      ))}
    </>
  );
}

export default Reference;
