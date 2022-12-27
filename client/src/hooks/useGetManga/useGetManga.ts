/* eslint react-hooks/exhaustive-deps: "off" */
import {useEffect, useState} from "react";
import {useApiCall} from "../useApiCall";
import {manga} from "../../types";

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
