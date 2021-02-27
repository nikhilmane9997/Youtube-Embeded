import React from 'react'
import ReactPlayer from 'react-player'
import "../App.css"

function YoutubeEmbeded() {
    return (
     
      <div className="ytvideo">
      <h1>My youtube Video</h1>
      <ReactPlayer controls
          url="https://www.youtube.com/watch?v=C2kJPyuM8Y4&t=1s"
          />
      </div> 
    )
}

export default YoutubeEmbeded
