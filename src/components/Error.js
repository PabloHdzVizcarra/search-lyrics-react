import React from 'react'

const Error = ({text}) => {
  return (
    <div className="alert alert-danger text-center p-2" role="alert">
      {text}
    </div>
  )
}

export default Error
