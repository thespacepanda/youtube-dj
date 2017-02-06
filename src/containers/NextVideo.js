import { connect } from 'react-redux'
import { pushVideo } from '../actions'
import Input from '../components/Input'

const mapStateToProps = (state) => ({
  video: state.nextVideo
})

const mapDispatchToProps = (dispatch) => ({
  pushVideo: (video) => dispatch(pushVideo(video))
})

const NextVideo = connect(mapStateToProps, mapDispatchToProps)(Input)

export default NextVideo
