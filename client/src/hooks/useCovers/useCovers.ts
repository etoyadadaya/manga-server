/* eslint react-hooks/exhaustive-deps: "off" */
import useApiCall from "../useApiCall";
import {useEffect, useState} from "react";

export const useCovers = (name: string, title: string) => {
  const apiCall = useApiCall();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    apiCall
      .get<{count: number}>(`manga/${name}/${title}/`)
      .then(({data: {count}}) => {
        setCount(count);
      });
  }, [name, title]);

  return count;
};
