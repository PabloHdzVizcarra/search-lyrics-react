import React from 'react'
import PropTypes from 'prop-types';

const ArtistInfo = ({ infoArtist }) => {
  if (Object.keys(infoArtist).length === 0) return null;

  const { strArtistThumb, strGenre, strBiographyEN } = infoArtist;

  return (

    <div className="card border-light">
      <div className="card-header bg-primary text-light">
        Informacion artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo Artist"/>
        <p className="card-text">Genero: {strGenre}</p>
        <h2 className="card-text">Biografia: </h2>
        <p className="card-text">Informacion: {strBiographyEN}</p>
        <p className="card-text">
          <a href={`https://${infoArtist.strFacebook}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
          </a>
          <a href={`https://${infoArtist.strTwitter}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
          </a>
          <a href={`${infoArtist.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  )
}

ArtistInfo.propTypes = {
  infoArtist: PropTypes.object.isRequired
};

export default ArtistInfo
