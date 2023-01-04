import React, {FC, useState} from "react";
import styles from "./slider.module.scss";
import {ISlider} from "./slider.types";
import {useGetManga} from "../../hooks";

export const Slider: FC<ISlider> = () => {
  const mangas = useGetManga();
  const [current, setCurrent] = useState(0);
  const data: string[] = [];

  const images = () => {
    mangas.map(manga => {
      data.push(
        `http://127.0.0.1:666/preview/${manga.name}/${manga.name}.webp`
      );
    });
    return data;
  };

  const arr = images();

  // TODO need to ask someone for help
  // console.log(arr);

  const slideRight = () => {
    setCurrent(current === arr.length - 1 ? 0 : current + 1);
  };

  // const slideLeft = () => {
  //   setCurrent(current === 0 ? arr.length - 1 : current - 1);
  // };

  setTimeout(() => {
    slideRight();
  }, 5000);

  return (
    <div className={styles.container}>
      {arr.map((img, key) => (
        <>
          <img
            style={{
              opacity: current ? 1 : 0.9,
              transition: "all 1s",
            }}
            className={styles.preview}
            src={arr[current]}
            alt=""
            key={key}
          />
        </>
      ))}
    </div>
  );
};

// TODO should optimize this piece of shit in 1-2 weeks
