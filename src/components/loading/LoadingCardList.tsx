import { range } from 'src/utils';
import LoadingDefinitionCard from './LoadingDefinitionCard';

interface LoadCardListProps {
  numberOfPlaceholders?: number;
}

function LoadingCardList({ numberOfPlaceholders = 12 }: LoadCardListProps) {
  return (
    <>
      {range(numberOfPlaceholders).map((_, i) => (
        <LoadingDefinitionCard key={i} />
      ))}
    </>
  );
}

export default LoadingCardList;
