import React, {Fragment} from 'react'

const Song = ({lyricSong}) => {

  if (lyricSong.length === 0) return null;

  return (
    <Fragment>
      <h2>Letra de cancion</h2>
      <p className="lyric">{lyricSong}</p>
    </Fragment>
  )

}

export default Song
