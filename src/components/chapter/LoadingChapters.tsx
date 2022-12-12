import { Collection, LoadingDefinitionCard } from 'src/components/card';
import { range } from 'src/utils';

interface LoadingChaptersProps {
  numberOfPlaceholders?: number;
}

function LoadingChapters({ numberOfPlaceholders = 12 }: LoadingChaptersProps) {
  return (
    <>
      {range(2).map((_, i) => (
        <Collection key={i} header={undefined}>
          {range(numberOfPlaceholders).map((_, i) => (
            <LoadingDefinitionCard key={i} />
          ))}
        </Collection>
      ))}
    </>
  );
}

export default LoadingChapters;
