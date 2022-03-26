import { useChapters } from 'src/api';
import Chapter from 'src/components/Chapter';

function Reference() {
  const { isLoading, error, data: chapters } = useChapters();

  if (isLoading) return <div>loading chapters...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    // wrapped in a fragment, otherwise Typescript whines
    <>
      {chapters?.map((chapter) => (
        <Chapter key={chapter.id} chapter={chapter} />
      ))}
    </>
  );
}

export default Reference;
