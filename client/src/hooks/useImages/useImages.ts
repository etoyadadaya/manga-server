/* eslint react-hooks/exhaustive-deps: "off" */
import useApiCall from "../useApiCall";
import {useEffect, useState} from "react";

export const useImages = (name: string, episode: number) => {
  const apiCall = useApiCall();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    apiCall
      .get<{count: number}>(`images/${name}/${episode}/`)
      .then(({data: {count}}) => {
        setCount(count);
      });
  }, [name, episode]);

  return count;
};
