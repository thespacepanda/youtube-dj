import { connect } from 'react-redux'
import { consumeVideo } from '../actions'
import Youtube from 'react-youtube'

const mapStateToProps = (state) => ({
  videoId: state.currentVideo,
  playlist: state.playlist,
  opts: {
    playerVars: {
      autoplay: 1
    }
  }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onEnd: () => dispatch(consumeVideo(ownProps.playlist))
})

const YoutubePlayer = connect(mapStateToProps, mapDispatchToProps)(Youtube)

export default YoutubePlayer
