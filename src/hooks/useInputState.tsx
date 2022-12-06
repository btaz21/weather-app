import { useState } from 'react';

const useInputState = (initialState: string = '') => {
  const [state, setState] = useState<string>(initialState);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setState(e.target.value);
  }

  return [state, handleChange] as const;
};

export default useInputState;
