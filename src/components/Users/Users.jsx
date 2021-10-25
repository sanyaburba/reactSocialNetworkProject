import styles from './Users.module.scss';
import React from "react";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={styles.wrap}>
            <div>
                {pages.map(page => {
                    return <button key={page.id} className={props.currentPage === page && styles.selected}
                                   onClick={(event) => {
                                       props.onPageChanged(page);
                                   }}> {page}</button>
                })}
            </div>
            {
                props.users.map(user =>
                    <div className={styles.wrap} key={user.id}>
                        <div className={styles.div}>
                            <NavLink to={'/profile/' + user.id}>
                                <img
                                    src={user.photos.large != null ? user.photos.small : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-0.jpg'}
                                    alt="" className={styles.img}/>
                            </NavLink>
                            <p>{user.name}</p>
                            {user.isFriend
                                ?
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id)
                                }}>Delete friend</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id)

                                }}>Add friend</button>}
                        </div>
                    </div>)
            }
        </div>
    )
}

export default Users;