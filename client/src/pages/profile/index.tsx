import React, {FC, useState} from "react";
import styles from "./styles.scss";
import {useGetManga} from "../../hooks";
import {Card, Header, Modal} from "../../components";

const Profile: FC = () => {
  const mangas = useGetManga();
  const [isModalActive, setModalActive] = useState<boolean>(false);
  const [modalData, setModalData] = useState<{
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
      />
      <div className={styles.container}>
        <Header type="profile" />
        <div className={styles.manga}>
          {mangas.map((manga, key) => (
            <>
              <Card
                onClick={() => {
                  setModalActive(!isModalActive);
                  setModalData({
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
