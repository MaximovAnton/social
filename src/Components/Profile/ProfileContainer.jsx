import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../../Redux/profile-reducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../Hoc/withAuthRedirect'
import { compose } from 'redux'


class ProfileContainer extends React.Component {

    updateProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 5555
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.updateProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
          this.updateProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} 
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus} 
                savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)