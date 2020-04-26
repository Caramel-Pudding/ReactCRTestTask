import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ user }) => {
  return (
    <React.Fragment>
      <h2>Профиль</h2>
      <p>Вас зовут: {user.name}</p>
    </React.Fragment>
  )
}

// Must be fixed: 
// Mistype: it's actually 'propTypes'
// Also 
// Should be improved:
// if you're using only one object property here and don't expect to extend comonent's functionality
// you might wish to accept only the name, not the whole user object
Profile.proptypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Profile
