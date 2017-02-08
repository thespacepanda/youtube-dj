export default function reducer(state = {}, action) {
  switch (action.type) {
    case "ADD_VIDEO":
      if (state.current === "") {
        return {
          ...state,
          current: action.video
        }
      }
      else {
        return {
          ...state,
          playlist: [action.video, ...state.playlist]
        }
      }
    case "DELETE_VIDEO":
      return {
        ...state,
        playlist: state.playlist.filter(video => video !== action.video)
      }
    case "PLAY_VIDEO":
      return {
        ...state,
        current: action.video
      }
    default:
      return state
  }
}
