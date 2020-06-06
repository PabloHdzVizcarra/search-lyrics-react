import React from 'react'
import Song from './Song'
import ArtistInfo from './ArtistInfo'

const ShowData = ({lyricSong, infoArtist}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <ArtistInfo
            infoArtist={infoArtist}
          />
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
