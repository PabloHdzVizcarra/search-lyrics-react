import React, { Fragment, useState, useEffect } from 'react'
import Form from './components/Form'
import axios from 'axios'
import ShowData from './components/ShowData'

function App() {

  // definir el state
  const [searchLyric, setSearchLyric] = useState({});
  const [lyricSong, setLyricSong] = useState('');

  useEffect(() => {
    if ( Object.keys(searchLyric).length === 0 ) return;

    const checkApiLyrics = async () => {
      const { artist, song } = searchLyric;

      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const result = await axios.get(url);
      setLyricSong(result.data.lyrics);
    }
    checkApiLyrics();


  }, [searchLyric])

  return (
    <Fragment>
      <Form
        setSearchLyric={setSearchLyric}
      />

      <ShowData
        lyricSong={lyricSong}
       />
    </Fragment>
  );
}

export default App;
