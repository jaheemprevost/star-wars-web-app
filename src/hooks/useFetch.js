import {useState, useEffect} from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const jsonData = await response.json();
      
        setIsLoading(false);
        
        if (jsonData['results'] === undefined) {
          setData(jsonData.result);
        } else {
          setData(jsonData.results);
        }
        
        setError(null);
      } catch(err) {
        setIsLoading(false);
        setError('Could not retrieve data.');
        console.log(err.message);
      }
      
    }

    fetchData();
  },[url]);

  return {data, isLoading};
};
