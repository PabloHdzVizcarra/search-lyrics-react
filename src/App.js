import React, { Fragment, useState, useEffect } from 'react'
import Form from './components/Form'
import axios from 'axios'
import ShowData from './components/ShowData'


function App() {

  // definir el state
  const [searchLyric, setSearchLyric] = useState({});
  const [lyricSong, setLyricSong] = useState('');
  const [infoArtist, setInfoArtist] = useState({});

  useEffect(() => {
    if ( Object.keys(searchLyric).length === 0 ) return;

    const checkApiLyrics = async () => {
      const { artist, song } = searchLyric;

      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const urlDataArtist =`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [ lyric, data ] = await Promise.all([
        axios(url),
        axios(urlDataArtist)
      ])

      setLyricSong(lyric.data.lyrics);
      setInfoArtist(data.data.artists[0])

    }
    checkApiLyrics();


  }, [searchLyric])

  return (
    <Fragment>
      <Form
        setSearchLyric={setSearchLyric}
      />

      <ShowData
        infoArtist={infoArtist}
        lyricSong={lyricSong}
       />

    </Fragment>
  );
}

export default App;
