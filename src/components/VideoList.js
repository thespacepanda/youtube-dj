import React from 'react'

const VideoList = ({videos = []}) => (
  <ul>
  {videos.map((video, index) => (
    <li key={index}>{video}</li>
  ))}
  </ul>
)

export default VideoList
