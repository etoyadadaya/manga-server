import {useTokenizedApiCall} from "../useTokenizedApiCall/useTokenizedApiCall";
import {useEffect, useState} from "react";
import {manga} from "../../types";

export const useFavorites = () => {
  const tokenizedApiCall = useTokenizedApiCall();
  const [favorites, setFavorites] = useState<manga[]>([]);

  const fetchFavorites = () => {
    tokenizedApiCall.get<{favorites: manga[]}>("/users/@me").then(res => {
      setFavorites(res.data.favorites);
    });
  };

  useEffect(() => {
    tokenizedApiCall.get<{favorites: manga[]}>("/users/@me").then(res => {
      setFavorites(res.data.favorites);
    });
  }, []);

  return {favorites, fetchFavorites};
};
