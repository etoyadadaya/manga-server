import React, {FC, useEffect, useState} from "react";
import styles from "./modal.module.scss";
import clsx from "clsx";
import {IModalProps} from "./modal.types";
import {NavLink} from "react-router-dom";
import {Button} from "../button/button";
import {useDeleteFavorite} from "../../hooks/useDeleteFavorite/useDeleteFavorite";
import {useAddFavorite} from "../../hooks/useAddFavorite/useAddFavorite";

// TODO ДИЗАЙН ГОВНА ВСЕ ПЕРЕДЕЛЫВАТЬ

export const Modal: FC<IModalProps> = ({
  active,
  setActive,
  className,
  modalData,
  fetchFavorites,
  favorites,
}) => {
  const handleClick = () => {
    document.body.style.overflow = "auto";
    setActive(false);
  };

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    favorites.map(favorite => {
      if (favorite.id === modalData.id) {
        setIsFavorite(true);
      }
    });
  }, [modalData]);

  const deleteFavorite = useDeleteFavorite();
  const addFavorite = useAddFavorite();

  return (
    <>
      <div
        className={clsx([styles.modal], {
          [styles.active]: active,
        })}
        onClick={handleClick}
      >
        <div
          className={clsx([className], [styles.modalContent], {
            [styles.active]: active,
          })}
          onClick={e => e.stopPropagation()}
        >
          <div className={styles.modalContainer}>
            <div className={styles.modalWrap}>
              <div className={styles.modalLeft}>
                <div className={styles.buttonsWrap}>
                  <img
                    className={styles.img}
                    src={`http://127.0.0.1:666/covers/${modalData?.name}/${modalData?.name}.webp`}
                    alt=""
                  />
                  <NavLink
                    className={styles.read}
                    to={`/?name=${modalData?.name}`}
                  >
                    Читать
                  </NavLink>
                  {isFavorite ? (
                    <Button
                      onClick={() => {
                        deleteFavorite(modalData.id).then(() => {
                          fetchFavorites();
                          handleClick();
                        });
                      }}
                      className={styles.read}
                    >
                      Удалить
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        addFavorite(modalData.id).then(() => {
                          fetchFavorites();
                          handleClick();
                        });
                      }}
                      className={styles.read}
                    >
                      Добавить
                    </Button>
                  )}
                </div>
              </div>
              <div className={styles.modalRight}>
                <div className={styles.descriptionWrap}>
                  <p className={styles.descriptionTitle}>{modalData?.title}</p>
                  <p className={styles.description}>{modalData?.description}</p>
                </div>
                <div className={styles.aboutWrap}>
                  <div className={styles.about}>
                    <p
                      className={styles.aboutTitle}
                    >{`Год выхода: ${modalData?.year}`}</p>
                    <p
                      className={styles.aboutTitle}
                    >{`Статус: ${modalData?.status}`}</p>
                    <p
                      className={styles.aboutTitle}
                    >{`Автор: ${modalData?.author}`}</p>
                    <p className={styles.aboutTitle}>
                      {`Возрастной рейтинг: ${modalData?.age}+`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
