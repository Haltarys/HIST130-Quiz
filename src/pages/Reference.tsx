import { useChapters } from 'src/api';
import Chapter from 'src/components/chapter';
import { LoadingChapters } from 'src/components/loading';

function Reference() {
  const { isLoading, error, data: chapters } = useChapters();

  if (isLoading) return <LoadingChapters />;

  if (error) return <div>Error: {error.message}</div>;

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
