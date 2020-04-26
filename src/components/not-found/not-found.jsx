import React from 'react'

// Must be fixed:
// You seem to not use any data here so this argument may be freely removed
const NotFound = ({ data }) => {
  return (
    <React.Fragment>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
    </React.Fragment>
  )
}

export default NotFound
