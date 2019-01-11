import React from 'react';
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';
import 'video-react/dist/video-react.css';

const VideoPlayer = ({ autoPlay, muted, src }) => (
  <Player autoPlay={autoPlay} muted={muted}>
    <source src={src} />
    <BigPlayButton position="center" />
    <LoadingSpinner />
  </Player>
);

VideoPlayer.defaultProps = {
  autoPlay: false,
  muted: false,
  src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
};

export default VideoPlayer;
