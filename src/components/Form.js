import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types';

const Form = ({setSearchLyric, errorAPI}) => {

  const [search, setSearch] = useState({
    artist: '',
    song: '',
  })

  const [error, setError] = useState(false);

  const { artist, song } = search;

  // funcion a cada input para leer contenido
  const handleChange = event => {
    const {target} = event;

    setSearch({
      ...search,
      [target.name]: target.value,
    })
  }

  // check APIS
  const handleSubmit = event => {
    event.preventDefault();

    if (artist.trim() === '' || song.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    // se pasan datos al component principal
    setSearchLyric(search);

  }

  return (
    <div className="bg-info">

      {error ?  <Error text="Todos los campos son obligatorios"/>: null }
      {errorAPI ? <Error text="Intenta con otra busqueda artista o cancion no encontrada"/>: null}

      <div className="container">
        <div className="row">
          <form
          onSubmit={ handleSubmit }
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center main-title h1 mb-4">Buscador Letras de Canciones</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Nombre Artista"
                      onChange={ handleChange }
                      value={artist}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cancion</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Nombre Cancion"
                      onChange={ handleChange }
                      value={song}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-secondary float-right px-5"
              >Buscar</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

Form.propTypes = {
  setSearchLyric: PropTypes.func.isRequired,
  errorAPI: PropTypes.bool.isRequired
};

export default Form
