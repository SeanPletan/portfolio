import React from 'react';

export default function VideoBackground({ src }) {
  return <video src={src} width="100%" height="100%" muted autoPlay loop id="gradientBackground"></video>;
}