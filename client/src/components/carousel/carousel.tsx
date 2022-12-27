import React, {FC} from "react";
import styles from "./carousel.module.scss";
import {ICarouselProps} from "./carousel.types";

export const Carousel: FC<ICarouselProps> = ({children}) => {
  return (
    <>
      <div className={styles.carouselRoot}>
        <div className={styles.carouselContainer}>
          <ul className={styles.carouselContainerScroll}>{children}</ul>
        </div>
      </div>
    </>
  );
};
