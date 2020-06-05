import React from 'react'
import Song from './Song'

const ShowData = ({lyricSong}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          
        </div>
        <div className="col-md-6">
          <Song
            lyricSong={lyricSong}
           />
        </div>
      </div>
    </div>
  )
}

export default ShowData
