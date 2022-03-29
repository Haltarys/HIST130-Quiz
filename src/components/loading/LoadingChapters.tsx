import { Collection } from 'src/components/card';
import { range } from 'src/utils';
import LoadingCardList from './LoadingCardList';

function LoadingChapters() {
  return (
    <>
      {range(2).map((_, i) => (
        <Collection key={i} header={undefined}>
          <LoadingCardList />
        </Collection>
      ))}
    </>
  );
}

export default LoadingChapters;
