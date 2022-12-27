/* eslint react-hooks/exhaustive-deps: "off" */
import {useEffect, useState} from "react";
import {useApiCall} from "../useApiCall";
import {manga} from "../../types";

export const useManga = (name: string) => {
  const apiCall = useApiCall();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<manga>();

  useEffect(() => {
    apiCall
      .get<manga>(`/manga/${name}`)
      .then(res => {
        setData(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {manga: data, isLoading};
};
