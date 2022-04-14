import Preloader from '../../Common/Preloader/Preloader'
import photoUser from '../../../assets/images/ava.jpg'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({ isOwner, profile, status, updateStatus, savePhoto }) => {

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const Contact = ({ contactTitle, contactValue }) => {
        return <div className={s.contact}><b>{contactTitle}</b> : {contactValue}</div>
    }

    return (
        <div className={s.avatar}>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            <div >
                <img src={profile.photos.large || photoUser} alt="Avatar" />

            </div>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
            <ProfileData profile={profile}/>
            <div>
                <b>contacts</b> : {Object.keys(profile.contacts).map(key => {
                    return <div>
                        <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    </div>
                })}
            </div>
            Всякая инфа
        </div>
    )
}

const ProfileData = ({profile}) => {
    return (
        <div>
            <div>
                <b>FoolName</b> : {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b> : {profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>Looking for a job</b> : {profile.lookingForAJobDescription}
                </div>
            }
            <b>About me</b> : {profile.aboutMe}
        </div>
    )
}

export default ProfileInfo