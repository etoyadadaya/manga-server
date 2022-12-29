import React, {FC, useEffect, useState} from "react";
import styles from "./styles.scss";
import {Carousel, Image} from "antd";
import {
  useGetManga,
  useImages,
  useManga,
  useQuery,
  useRequireAuth,
} from "../../hooks";
import {Header, Menu, Carousel as Car} from "../../components";

// vol.05 - 22 episodes; next vol.06
//http://localhost:10880/?name=berserk

//vol.15 - 94; next 95

const Main: FC = () => {
  useRequireAuth("/login");
  const name = useQuery().get("name");
  const [episodeNum, setEpisodeNum] = useState<number>(0);
  const [isVertical, setIsVertical] = useState<boolean>(true);
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const [isSettingsActive, setIsSettingsActive] = useState<boolean>(false);
  const {manga} = useManga(name);
  const images = useImages(name, episodeNum);
  useGetManga();

  useEffect(() => {
    if (isMenuActive || isSettingsActive) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuActive, isSettingsActive]);

  return (
    <>
      <Menu
        setEpisode={setEpisodeNum}
        episodes={manga?.episodesNum}
        isMenuActive={isMenuActive}
        setIsMenuActive={setIsMenuActive}
        isSettings={false}
      />
      <Menu
        isMenuActive={isSettingsActive}
        setIsMenuActive={setIsSettingsActive}
        isSettings={true}
        setIsVertical={setIsVertical}
        isVertical={isVertical}
      />
      <div className={styles.container}>
        <Header
          toggleMenu={setIsMenuActive}
          toggleSettings={setIsSettingsActive}
          episodeNumber={episodeNum}
          setEpisode={setEpisodeNum}
          totalEpisodes={manga?.episodesNum}
          mangaName={manga?.title}
          type="main"
        />
        <div className={styles.cards}>
          {isVertical ? (
            <Car variant="vertical">
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
              <div className={styles.carouselRoot}>
                <div className={styles.carouselContainer}>
                  <Carousel
                    adaptiveHeight={true}
                    swipeToSlide={true}
                  >
                    {images().map((link, key) => (
                      <Image
                        preview={false}
                        src={link}
                        alt=""
                        key={key}
                      />
                    ))}
                  </Carousel>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
