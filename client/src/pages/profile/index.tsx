import React, {FC, useState} from "react";
import styles from "./styles.scss";
import {Card, Header, Modal} from "../../components";
import {useFavorites} from "../../hooks/useFavorites/useFavorites";
import {useRequireAuth} from "../../hooks";

const Profile: FC = () => {
  useRequireAuth("/login");
  const {favorites, fetchFavorites} = useFavorites();
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
        <div className={styles.manga}>
          {favorites.map((manga, key) => (
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

export default Profile;
