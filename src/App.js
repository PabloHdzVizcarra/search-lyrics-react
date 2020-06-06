import React, { Fragment, useState, useEffect } from 'react'
import Form from './components/Form'
import axios from 'axios'
import ShowData from './components/ShowData'


function App() {

  // definir el state
  const [searchLyric, setSearchLyric] = useState({});
  const [lyricSong, setLyricSong] = useState('');
  const [infoArtist, setInfoArtist] = useState({});
  const [errorAPI, setErrorAPI] = useState(false);

  useEffect(() => {
    if ( Object.keys(searchLyric).length === 0 ) return;

    const checkApiLyrics = async () => {
      const { artist, song } = searchLyric;

      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const urlDataArtist =`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      try {
        const [ lyric, data ] = await Promise.all([
          axios(url),
          axios(urlDataArtist)
        ])

        setLyricSong(lyric.data.lyrics);
        setInfoArtist(data.data.artists[0])

        setErrorAPI(false)

      } catch (error) {
        setErrorAPI(true)
      }


    }
    checkApiLyrics();


  }, [searchLyric])

  return (
    <Fragment>
      <Form
        setSearchLyric={setSearchLyric}
        errorAPI={errorAPI}
      />

      <ShowData
        infoArtist={infoArtist}
        lyricSong={lyricSong}
       />

    </Fragment>
  );
}

export default App;
