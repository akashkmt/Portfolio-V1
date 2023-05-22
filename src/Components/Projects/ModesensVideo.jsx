import React from 'react'
import ReactPlayer from 'react-player';

function ModesensVideo() {
    return (
        <ReactPlayer
        className = "project-video"
        width="100%"
        controls={true}
        url="/ModesensVideo.mp4"
        playing={true}
        loop={true}
      />
    )
}

export default ModesensVideo;