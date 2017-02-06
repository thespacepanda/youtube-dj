import { connect } from 'react-redux'
import VideoList from '../components/VideoList'

const mapStateToProps = (state) => ({
  videos: state.playlist
})

const Playlist = connect(mapStateToProps)(VideoList)

export default Playlist
