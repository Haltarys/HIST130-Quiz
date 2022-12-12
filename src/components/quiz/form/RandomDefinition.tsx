import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import type { Definition } from 'src/api/types';
import { useNextRandomDefinition } from 'src/features/quizSlice';
import type { QuizFormData } from './quizFormData';
import DefinitionText from './DefinitionText';
import QuizActions from './QuizActions';
import QuizTextField from './QuizTextField';

interface RandomDefinitionProps {
  definitions: Definition[];
}

function RandomDefinition({ definitions }: RandomDefinitionProps) {
  const nextRandomDefinition = useNextRandomDefinition(definitions);
  const [definition, setDefinition] = useState<Definition | undefined>();
  const setNextRandomDefinition = () => setDefinition(nextRandomDefinition());
  const { control, handleSubmit, reset, setFocus, setValue } =
    useForm<QuizFormData>({
      reValidateMode: 'onSubmit',
      shouldUnregister: true,
    });

  // Render the component with a random definition by default
  useEffect(() => {
    setNextRandomDefinition();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(() => {
        setNextRandomDefinition();
        reset();
      })}
    >
      <DefinitionText
        definition={definition}
        handleClick={setNextRandomDefinition}
      />
      <QuizTextField
        control={control}
        // TODO: get regex from definition
        definitionRegex={/batman/}
        handleRevealSolution={() => {
          if (definition) setValue('keywordAttempt', definition.term);
          setFocus('keywordAttempt');
        }}
      />
      <QuizActions handleClick={setNextRandomDefinition} />
    </form>
  );
}

export default RandomDefinition;
