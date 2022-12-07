import { useState } from 'react';

const useInputState = (initialState: string = '') => {
  const [state, setState] = useState<string>(initialState);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setState(e.target.value);
  }

  function resetState() {
    setState('');
  }

  return [state, handleChange, resetState] as const;
};

export default useInputState;
