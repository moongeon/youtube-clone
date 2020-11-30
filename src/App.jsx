import Axios from "axios";
import { useCallback, useState } from "react";
import "./App.css";
import Header from "./componets/header/header.jsx";
import { myKey, ApiPath } from "./config/index.js";
import CardList from "./componets/cardList/cardList.jsx";
import VideoDetail from "./componets/videoDetail/videoDetail.jsx";
import styles from "./app.module.css";

function App() {
  const [cardData, setCardData] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);

  const onClickVideo = (video) => {
    setSelectVideo(video);
  };

  const onSearch = useCallback(async (inputSearch) => {
    setSelectVideo(null);
    const responseData = await Axios.get(`${ApiPath}/search`, {
      params: {
        key: myKey,
        part: "snippet",
        maxResults: "25",
        q: inputSearch,
      },
    });
    setCardData(responseData.data.items);
  }, []);

  return (
    <>
      <div className={styles.app}>
        <Header onSearch={onSearch}></Header>
        <section className={styles.content}>
          {selectVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectVideo}></VideoDetail>
            </div>
          )}
          <div className={styles.list}>
            <CardList
              cardData={cardData}
              onClickVideo={onClickVideo}
              display={selectVideo ? "list" : "grid"}
            ></CardList>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
