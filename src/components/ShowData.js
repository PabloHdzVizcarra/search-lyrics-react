import React from 'react'
import Song from './Song'
import ArtistInfo from './ArtistInfo'
import PropTypes from 'prop-types';

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


ShowData.propTypes = {
  lyricSong: PropTypes.string.isRequired,
  infoArtist: PropTypes.object.isRequired
};

export default ShowData
