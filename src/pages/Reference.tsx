import { useChapters } from 'src/api';
import Chapter from 'src/components/chapter';
import ErrorMessage from 'src/components/error';
import { LoadingChapters } from 'src/components/loading';

function Reference() {
  const { isLoading, error, data: chapters } = useChapters();

  if (isLoading) return <LoadingChapters />;

  if (error) return <ErrorMessage>{error?.message}</ErrorMessage>;

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
