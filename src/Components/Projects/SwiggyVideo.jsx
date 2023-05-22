import React from "react";
import ReactPlayer from "react-player";

function ProjectVideoSwiggy() {
    return (
      <ReactPlayer
                className = "project-video"
                // style={{ padding: "10px", margin:'auto' }}
                width="100%"
                controls={true}
                url="/Swiggy.mp4"
                playing={true}
                loop={true}
              />
    )
  }

  export default ProjectVideoSwiggy;