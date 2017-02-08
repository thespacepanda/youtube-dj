import React from 'react'
import { Grid, Row, Cell } from 'react-inline-grid'
import NextVideo from '../containers/NextVideo'
import YoutubePlayer from '../containers/YoutubePlayer'
import Playlist from '../containers/Playlist'

const App = () => {
  return (
    <div>
          <NextVideo />
          <YoutubePlayer />
          <Playlist />
    </div>
  )
}

export default App
