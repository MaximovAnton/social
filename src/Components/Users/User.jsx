import React from 'react'
import userPhoto from '../../assets/images/ava.jpg'
import s from './Users.module.css'
import { NavLink} from 'react-router-dom'

export const User = ({user, followingInProgress, unfollow, follow}) => {
    return <div>
                <div>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small ? user.photos.small : userPhoto} alt="" className={s.photo} />
                        </NavLink>
                    </div>
                    <span>
                        {user.followed ?
                            <button disabled={followingInProgress.some( userId => userId === user.id)} onClick={() => {
                               unfollow(user.id)
                            }} >unfollow</button> :
                            <button disabled={followingInProgress.some( id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>follow</button>}
                    </span>
                </div>
                <div>
                    <div>
                        <span>{user.id}</span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        <span>{"user.location.country"}</span>
                        <span>{"user.location.city"}</span>
                    </div>
                </div>
            </div>
}