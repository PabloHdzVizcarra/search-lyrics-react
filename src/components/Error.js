import React from 'react'
import PropTypes from 'prop-types';

const Error = ({text}) => {
  return (
    <div className="alert alert-danger text-center p-2" role="alert">
      {text}
    </div>
  )
}

Error.propTypes = {
  text: PropTypes.string.isRequired
};

export default Error
