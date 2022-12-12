import { useState } from 'react';
import type { Definition } from 'src/api/types';
import { useNextRandomDefinition } from 'src/features/quizSlice';

interface RandomDefinitionProps {
  definitions: Definition[];
}

function RandomDefinition({ definitions }: RandomDefinitionProps) {
  const nextRandomDefinition = useNextRandomDefinition(definitions);
  const [definition, setDefinition] = useState<Definition | undefined>();

  return (
    <>
      <div>{definition?.text}</div>
      <button onClick={() => setDefinition(nextRandomDefinition())}>
        Next random definition
      </button>
    </>
  );
}

export default RandomDefinition;
