import { Paginator } from '../Common/Paginator/paginator'
import { User } from './User'

let Users = (props) => {
    return <div>
        <Paginator
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged} />
        <div>
            {
                props.users.map(user => <User key={user.id}
                    user={user}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow} />)
            }
        </div>

    </div>
}

export default Users