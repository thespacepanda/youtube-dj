const parseYoutubeUrl = (url) => {
  return url.split("?")[1].split("&").filter(param => param[0] === "v")[0].split("=")[1]
}

export function addVideo(video) {
  return {
    type: "ADD_VIDEO",
    video: video
  }
}

export function addVideoServerSide(video) {
  return {
    type: "server/ADD_VIDEO",
    video: video
  }
}

export function deleteVideo(video) {
  return {
    type: "DELETE_VIDEO",
    video: video
  }
}

export function playVideo(video) {
  return {
    type: "PLAY_VIDEO",
    video: video
  }
}

export function pushVideo(video) {
  return (dispatch, getState) => {
    const sanitized = parseYoutubeUrl(video)
    const current = getState().current
    if (current === "") {
      dispatch(playVideo(sanitized))
    }
    else {
      dispatch(addVideo(sanitized))
    }
    dispatch(addVideoServerSide(sanitized))
  }
}

export function consumeVideo() {
  return (dispatch, getState) => {
    const video = getState().playlist[0]
    if (video !== undefined) {
      dispatch(deleteVideo(video))
      dispatch(playVideo(video))
    }
  }
}
