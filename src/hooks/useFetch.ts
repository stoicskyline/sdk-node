import { useEffect, useReducer, useRef } from 'react'

// TODO test this, this is not tested
// https://dev.to/silvestricodes/asynchronous-flows-with-react-hooks-1g0m comment https://dev.to/kevtiq/comment/f4d2

const useFetch = (fetchPromise: Promise<any>, reducer, initialState, deps?: any[]) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; }
  }, []);

  useEffect(() => {
    fetch();
  }, deps); 

  async function fetch (vars) => {
    if (!isMounted.current) return; 
    dispatch({ type: 'INIT' });

    try {
      const result = await fetchPromise;
      if (isMounted.current) dispatch({ type: 'SUCCESS', payload: result });
    } catch (e) {
      if (isMounted.current) dispatch({ type: 'ERROR', payload: e });
    }
  } 


  return [state, fetch];
}

