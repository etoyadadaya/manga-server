/* eslint react-hooks/exhaustive-deps: "off" */
import {useEffect, useState} from "react";
import {useApiCall} from "../useApiCall";

export const useImages = (name: string, episode: number) => {
  const [count, setCount] = useState<number>(0);
  const apiCall = useApiCall();

  useEffect(() => {
    apiCall.get<{imagesNum: number}>(`/images/${name}/${episode}`).then(res => {
      setCount(res.data.imagesNum);
    });
  }, [name, episode]);

  return () => {
    const data: string[] = [];

    for (let i = 0; i < count; i++) {
      data.push(`http://127.0.0.1:666/${name}/${episode}/${i}.webp`);
    }

    return data;
  };
};
