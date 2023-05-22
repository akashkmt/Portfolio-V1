import React from 'react'
import ReactPlayer from 'react-player';

function MediumVideo() {
    return (
        <ReactPlayer
        className = "project-video"
        width="100%"
        controls={true}
        url="/MediumVideo.mp4"
        playing={true}
        loop={true}
      />
    )
}

export default MediumVideo;