import React, {FC, useEffect, useState} from "react";
import styles from "./styles.scss";
import Header from "../../components/header";
import Menu from "../../components/menu";
import {useEpisodes} from "../../hooks/useEpisodes/useEpisodes";
import {useEpisodeImages} from "../../hooks/useEpidodeImages/useEpisodeImages";
import {useQuery} from "../../hooks/useQuery/useQuery";
import Car from "../../components/carousel";
import {Carousel, Image} from "antd";
import useRequireAuth from "../../hooks/useRequireAuth/useRequireAuth";

// vol.05 - 22 episodes; next vol.06
//http://localhost:10880/?name=berserk

//vol.15 - 94; next 95

const Main: FC = () => {
  // useRequireAuth("/login");
  const name = useQuery().get("name");
  const [episodeNum, setEpisodeNum] = useState<number>(0);
  const [isVertical, setIsVertical] = useState<boolean>(true);
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const [isSettingsActive, setIsSettingsActive] = useState<boolean>(false);
  const {episodes, isLoading} = useEpisodes(name);
  const images = useEpisodeImages(name, episodeNum);

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
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <Menu
            setEpisode={setEpisodeNum}
            episodes={episodes}
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
              totalEpisodes={episodes}
              mangaName={name}
              type="main"
            />
            <div className={styles.cards}>
              {isVertical ? (
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
