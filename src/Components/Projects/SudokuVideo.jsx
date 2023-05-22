import React from 'react';
import ReactPlayer from 'react-player';



function ProjectVideoSudoku() {
    return (
        <ReactPlayer
        className = "project-video"
        width="100%"
        // style={{ padding: "10px", margin:'auto'}}
        controls={true}
        url="/SudokuVideo.mp4"
        playing={true}
        loop={true}
      />
    )
  }

  export default ProjectVideoSudoku;