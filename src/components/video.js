import * as React from "react";

const Video = ({
  src,
  poster,
  title = "Project video",
  autoPlay = false,
  loop = false,
  muted = false,
}) => (
  <video
    controls playsInline className="project-video"
  >
    <source src={src} type="video/mp4" />

    Your browser does not support HTML video.
  </video>
);

export default Video;