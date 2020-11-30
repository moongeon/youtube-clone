import React, { useEffect } from "react";
import styles from "./cardWidget.module.css";
function CardWidget({ item, onClickVideo, display }) {
  const displaytype = display === "list" ? styles.list : styles.grid;

  return (
    <>
      <li
        className={`${styles.container} ${displaytype}`}
        onClick={() => onClickVideo(item)}
      >
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={item.snippet.thumbnails.medium.url}
          ></img>
          <div className={styles.content}>
            <p className={styles.title}>{item.snippet.title}</p>
            <p className={styles.channel}>{item.snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardWidget;
