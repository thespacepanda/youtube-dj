import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { pushVideo } from '../actions'
import Input from '../components/Input'

const mapStateToProps = (state) => ({
  video: state.nextVideo
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    pushVideo: (video) => dispatch(pushVideo(video))
  }, dispatch)
}

const NextVideo = connect(mapStateToProps, mapDispatchToProps)(Input)

export default NextVideo
