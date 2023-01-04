import {useTokenizedApiCall} from "../useTokenizedApiCall/useTokenizedApiCall";

export const useDeleteFavorite = () => {
  const tokenizedApiCall = useTokenizedApiCall();

  return (id: number) => tokenizedApiCall.delete(`/users/favorite/${id}`);
};
