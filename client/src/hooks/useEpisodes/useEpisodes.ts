import {useEffect, useState} from "react";
import useApiCall from "../useApiCall";

export const useEpisodes = (name: string) => {
  const apiCall = useApiCall();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [episodes, setEpisodes] = useState<number>(0);

  useEffect(() => {
    apiCall
      .get<number>(`/images/${name}`)
      .then(({data}) => {
        setEpisodes(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [name]);

  return {episodes, isLoading};
};
