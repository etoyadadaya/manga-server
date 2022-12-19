import React, {FC, useEffect, useState} from "react";
import styles from "./styles.scss";
import Header from "../../components/header";
import Menu from "../../components/menu";
import {useEpisodes} from "../../hooks/useEpisodes/useEpisodes";
import {useEpisodeImages} from "../../hooks/useEpidodeImages/useEpisodeImages";
import {useQuery} from "../../hooks/useQuery/useQuery";
import Car from "../../components/carousel";
import {Carousel, Image} from "antd";

// vol.05 - 22 episodes; next vol.06
//http://localhost:10880/?name=berserk

const Main: FC = () => {
  const name = useQuery().get("name");
  const [episodeNum, setEpisodeNum] = useState<number>(1);
  const [isVertical, setIsVertical] = useState<boolean>(true);
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const {episodes, isLoading} = useEpisodes(name);
  const images = useEpisodeImages(name, episodeNum);

  useEffect(() => {
    if (isMenuActive) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuActive]);

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <Menu
            setEpisode={setEpisodeNum}
            episodes={episodes}
            isMenuActive={isMenuActive}
            setIsMenuActive={setIsMenuActive}
          />
          <div className={styles.container}>
            <button
              className={styles.btn}
              onClick={() => setIsVertical(!isVertical)}
            >
              CLICK
            </button>
            <Header toggleMenu={setIsMenuActive} />
            <div className={styles.cards}>
              {isVertical === true ? (
                <Car>
                  {images().map((link, key) => (
                    <img
                      className={styles.img}
                      src={link}
                      alt=""
                      key={key}
                    />
                  ))}
                </Car>
              ) : (
                <>
                  <Carousel adaptiveHeight={true}>
                    {images().map((link, key) => (
                      <Image
                        preview={false}
                        src={link}
                        alt=""
                        key={key}
                      />
                    ))}
                  </Carousel>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Main;
