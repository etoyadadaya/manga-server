import React, {FC, useState} from "react";
import styles from "./styles.scss";
import Header from "../../components/header";
import {useGetManga} from "../../hooks/useGetManga/useGetManga";
import Card from "../../components/card";
import Modal from "../../components/modal";

const Profile: FC = () => {
  const mangas = useGetManga();
  const [isModalActive, setModalActive] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Header type="home" />
      <div className={styles.manga}>
        {mangas.map((manga, key) => (
          <>
            <Card
              onClick={() => setModalActive(!isModalActive)}
              name={manga.name}
              title={manga.title}
              description={manga.description}
              key={key}
            />
            <Modal
              active={isModalActive}
              setActive={setModalActive}
              title={manga.title}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Profile;
