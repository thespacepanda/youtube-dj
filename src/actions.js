const parseYoutubeUrl = (url) => {
  return url.split("?")[1].split("&").filter(param => param[0] === "v")[0].split("=")[1]
}

export function updateNextVideo(video) {
  console.log("UPDATE_NEXT_VIDEO", video)
  return {
    type: "UPDATE_NEXT_VIDEO",
    video: video
  }
}

export function setCurrentVideo(video) {
  return {
    type: "SET_CURRENT_VIDEO",
    video: video
  }
}

export function addVideo(video) {
  console.log("ADD_VIDEO", video)
  return {
    type: "ADD_VIDEO",
    video: video
  }
}

export function deleteVideo(video) {
  return {
    type: "DELETE_VIDEO",
    video: video
  }
}

export function pushVideo(video, currentVideo) {
  return (dispatch) => {
    const sanitizedVideo = parseYoutubeUrl(video)
    if (currentVideo === "") {
      dispatch(setCurrentVideo(sanitizedVideo))
    }
    else {
      dispatch(addVideo(sanitizedVideo))
    }
  }
}

export function consumeVideo(playlist) {
  return (dispatch) => {
    const video = playlist.pop()
    dispatch(deleteVideo(video))
    dispatch(setCurrentVideo(video))
  }
}
