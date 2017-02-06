import { combineReducers } from 'redux'

function nextVideo(nextVideo = "", action) {
  switch (action.type) {
    case "UPDATE_NEXT_VIDEO":
      console.log("updated next video")
      return action.video
    default:
      return nextVideo
  }
}

function currentVideo(currentVideo = "", action) {
  switch (action.type) {
    case "SET_CURRENT_VIDEO":
      return action.video
    default:
      return currentVideo
  }
}

function playlist(playlist = [], action) {
  switch (action.type) {
    case "ADD_VIDEO":
      console.log("added video")
      return [action.video, ...playlist]
    case "DELETE_VIDEO":
      return playlist.filter(video => video !== action.video)
    default:
      return playlist
  }
}

const reducer = combineReducers({
  nextVideo,
  playlist,
  currentVideo
})

export default reducer
