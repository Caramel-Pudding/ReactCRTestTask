import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import Profile from '../../components/profile/profile.jsx'

class ProfileContainer extends PureComponent {
  render() {
    // Must be fixed: as it's written right here you miss the props validation of this container
    const { user } = this.props
    return <Profile user={user} />
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
})

// Should be improved: You don't seem to need this mapDispatchToProps
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
