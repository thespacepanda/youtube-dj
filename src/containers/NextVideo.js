import { connect } from 'react-redux'
import { pushVideo } from '../actions'
import Input from '../components/Input'

const mapDispatchToProps = (dispatch) => ({
  pushVideo: (video) => dispatch(pushVideo(video))
})

const NextVideo = connect(null, mapDispatchToProps)(Input)

export default NextVideo
