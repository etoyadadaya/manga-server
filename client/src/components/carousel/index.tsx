import React, {FC, HTMLProps} from "react";

import styles from "./styles.scss";

type ICarouselProps = HTMLProps<HTMLElement>;

const Carousel: FC<ICarouselProps> = ({children}) => {
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

export default Carousel;
