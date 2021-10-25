import styles from './ProfileInfo.module.scss';
import Preloader from "../../../common/Preloader/Preloader";
import UserProfileStatus from "./UserProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={styles.photoblock}>
                <img
                    src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    alt='what' className={styles.fullPhoto}/>
            </div>
            <div>
                <img
                    src={!props.profile.photos.small ? `https://seeklogo.com/images/N/no-photography-sign-logo-1F6DB79194-seeklogo.com.png` : props.profile.photos.small}
                    className={styles.img} alt=""/>
                <div className={styles.about}>
                    <UserProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <p>{props.profile.aboutMe}</p>
                    <p>{props.profile.lookingForAJob}</p>
                    <p>{props.profile.fullName}</p>
                    <p>{props.profile.contacts.vk}</p>
                    <p>{props.profile.contacts.facebook}</p>
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo;
