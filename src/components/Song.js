import React, {Fragment} from 'react'
import PropTypes from 'prop-types';

const Song = ({lyricSong}) => {

  if (lyricSong.length === 0) return null;

  return (
    <Fragment>
      <h2>Letra de cancion</h2>
      <p className="lyric">{lyricSong}</p>
    </Fragment>
  )

}

Song.propTypes = {
  lyricSong: PropTypes.string.isRequired
};

export default Song
