import {connect} from "react-redux";
import {
    addFriend,
    deleteFriend, follow, getUsers,
    setCurrentPage, toggleFollowingProgress, unfollow
} from "../../Redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/>
                    : null}
                <Users currentPage={this.props.currentPage} users={this.props.users}
                       totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       follow={this.props.follow} unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged}
                       followingInProgress={this.props.followingInProgress}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps,
        {
            addFriend,
            deleteFriend,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers,
            unfollow,
            follow
        }
    ),
    withAuthRedirect
)(UsersComponent)