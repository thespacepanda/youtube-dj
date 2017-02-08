import React from 'react'
import { Grid, Row, Cell } from 'react-inline-grid'
import TeamRequired from '../containers/TeamRequired'
import NextVideo from '../containers/NextVideo'
import YoutubePlayer from '../containers/YoutubePlayer'
import Playlist from '../containers/Playlist'

const App = () => {
  return (
    <div>
      <TeamRequired>
        <NextVideo />
        <YoutubePlayer />
        <Playlist />
      </TeamRequired>
    </div>
  )
}

export default App
