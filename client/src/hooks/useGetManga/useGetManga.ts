/* eslint react-hooks/exhaustive-deps: "off" */
import {useEffect, useState} from "react";
import {manga} from "../../types";
import {useApiCall} from "../useApiCall";

export const useGetManga = () => {
  const apiCall = useApiCall();
  const [mangas, setMangas] = useState<manga[]>([]);

  useEffect(() => {
    apiCall.get<manga[]>("/manga").then(res => {
      setMangas(res.data);
    });
  }, []);

  return mangas;
};
