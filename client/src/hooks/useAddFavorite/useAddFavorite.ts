import {useTokenizedApiCall} from "../useTokenizedApiCall/useTokenizedApiCall";

export const useAddFavorite = () => {
  const tokenizedApiCall = useTokenizedApiCall();

  return (id: number) => tokenizedApiCall.post(`/users/favorite/${id}`);
};
