import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPeding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then(res => {
        console.log(res);
        if(!res.ok){
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setData(data)
        setIsPeding(false);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError'){
          console.log('fetch aborted')
        } else {
          setIsPeding(false);
          setError(err.message)
        }
      })
    return () => abortCont.abort();
  }, [url]);

  return {  data, isPending, error };
};

export default useFetch;