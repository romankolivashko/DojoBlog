import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPeding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
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
        // console.log(err.message);
        setIsPeding(false);
        setError(err.message)
      })
  }, [url]);

  return {  data, isPending, error };
};

export default useFetch;