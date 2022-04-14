import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../Redux/users-reducer'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'
import { withAuthRedirect } from '../../Hoc/withAuthRedirect'
import { compose } from 'redux'
import {getUsersSelector, getPageSize, getTotalUsersCount, getCurrentPage, getFollowingInProgress, getIsAuth, getIsFetching } from '../../Redux/user-selectors'

class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setCurrentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    }),
    withAuthRedirect
)(UsersContainer)