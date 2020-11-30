import React from "react";
import CardWidget from "../cardWidget/cardWidget.jsx";
import styles from "./cardList.module.css";
function CardList({ cardData, onClickVideo, display }) {
  return (
    <ul className={styles.videos}>
      {cardData &&
        cardData.map((item) => (
          <CardWidget
            key={item.etag}
            item={item}
            onClickVideo={onClickVideo}
            display={display}
          ></CardWidget>
        ))}
    </ul>
  );
}

export default CardList;
