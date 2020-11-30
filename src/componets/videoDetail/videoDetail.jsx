import React, { useEffect } from "react";

function componentName({ video }) {
  return (
    <>
      <section>
        <iframe
          type="text/html"
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameborder="0"
          allowfullscreen
        ></iframe>
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <pre>{video.snippet.description}</pre>
      </section>
    </>
  );
}

export default componentName;
