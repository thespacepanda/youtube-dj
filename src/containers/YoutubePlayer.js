import { connect } from 'react-redux'
import { consumeVideo } from '../actions'
import Youtube from 'react-youtube'

const mapStateToProps = (state) => ({
  videoId: state.current,
  opts: {
    playerVars: {
      autoplay: 1
    }
  }
})

const mapDispatchToProps = (dispatch) => ({
  onEnd: () => dispatch(consumeVideo())
})

const YoutubePlayer = connect(mapStateToProps, mapDispatchToProps)(Youtube)

export default YoutubePlayer
