import { useForm } from 'react-hook-form';
import { useState } from 'react';
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
  const setNextRandomDefinition = () => setDefinition(nextRandomDefinition());
  const [definition, setDefinition] = useState<Definition | undefined>();
  const { control, handleSubmit, reset } = useForm<QuizFormData>({
    reValidateMode: 'onSubmit',
    shouldUnregister: true,
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);

        setNextRandomDefinition();
        reset();
      })}
    >
      <DefinitionText
        definition={definition}
        handleClick={setNextRandomDefinition}
      />
      <QuizTextField control={control} />
      <QuizActions handleClick={setNextRandomDefinition} />
    </form>
  );
}

export default RandomDefinition;
