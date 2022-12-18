import {useImages} from "../useImages/useImages";

export const useEpisodeImages = (name: string, episode: number) => {
  const count = useImages(name, episode);

  return () => {
    const data: string[] = [];

    for (let i = 0; i < count; i++) {
      data.push(`http://127.0.0.1:666/${name}/${episode}/${i}.webp`);
    }

    return data;
  };
};
