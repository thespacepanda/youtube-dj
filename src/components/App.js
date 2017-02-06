import React from 'react'
import { Grid, Row, Cell } from 'react-inline-grid'
import NextVideo from '../containers/NextVideo'
import YoutubePlayer from '../containers/YoutubePlayer'
import Playlist from '../containers/Playlist'

const App = () => {
  return (
    <Grid>
      <div>
        <Row is="center">
          <Cell is="12">
            <NextVideo />
          </Cell>
        </Row>
        <Row>
          <Cell is="10">
            <YoutubePlayer />
          </Cell>
          <Cell is="2">
            <Playlist />
          </Cell>
        </Row>
      </div>
    </Grid>
  )
}

export default App
