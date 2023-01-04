import React, {useState} from "react";
import styles from "./styles.scss";
import {Card, Header, Modal} from "../../components";
import {useGetManga, useRequireAuth} from "../../hooks";
import {useFavorites} from "../../hooks/useFavorites/useFavorites";

const Home = () => {
  useRequireAuth("/login");
  const mangas = useGetManga();
  const {fetchFavorites, favorites} = useFavorites();
  const [isModalActive, setModalActive] = useState<boolean>(false);
  const [modalData, setModalData] = useState<{
    id: number;
    name: string;
    title: string;
    description: string;
    author: string;
    status: string;
    year: number;
    age: number;
  }>();

  return (
    <>
      <Modal
        active={isModalActive}
        setActive={setModalActive}
        modalData={modalData}
        favorites={favorites}
        fetchFavorites={fetchFavorites}
      />
      <div className={styles.container}>
        <Header type="profile" />
        <div className={styles.content}>
          {mangas.map((manga, key) => (
            <>
              <Card
                onClick={() => {
                  setModalActive(!isModalActive);
                  setModalData({
                    id: manga.id,
                    name: manga.name,
                    title: manga.title,
                    description: manga.description,
                    author: manga.author,
                    status: manga.status,
                    year: manga.year,
                    age: manga.age,
                  });
                }}
                name={manga.name}
                title={manga.title}
                key={key}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
