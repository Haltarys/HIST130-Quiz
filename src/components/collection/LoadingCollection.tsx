import { range } from 'src/utils';
import LoadingDefinitionCard from 'src/components/card/LoadingDefinitionCard';
import Collection from './Collection';

interface LoadCardListProps {
  numberOfPlaceholders?: number;
}

function LoadingCollection({ numberOfPlaceholders = 12 }: LoadCardListProps) {
  return (
    <Collection header={undefined}>
      {range(numberOfPlaceholders).map((_, i) => (
        <LoadingDefinitionCard key={i} />
      ))}
    </Collection>
  );
}

export default LoadingCollection;
