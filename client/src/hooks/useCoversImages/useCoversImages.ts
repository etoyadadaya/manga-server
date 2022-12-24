import {useCovers} from "../useCovers/useCovers";

export const useCoversImages = (name: string, title: string) => {
  const count = useCovers(name, title);

  return () => {
    const data: string[] = [];

    for (let i = 0; i < count; i++) {
      data.push(`http://127.0.0.1:666/${name}/${title}/${i}.webp`);
    }

    return data;
  };
};
