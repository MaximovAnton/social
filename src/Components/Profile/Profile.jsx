import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo
            isOwner={props.isOwner}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus} 
            savePhoto={props.savePhoto}/>
        <MyPostsContainer />
    </div>

}

export default Profile