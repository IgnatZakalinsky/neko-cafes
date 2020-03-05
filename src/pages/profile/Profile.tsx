import React from 'react';
import ProfileInfo from "./profile-info/ProfileInfo";
import s from './Profile.module.css';
import Comments from "./comments/Comments";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../main/store/store";

type ProfileProps = {
    closeNavBar: () => void;
}

const Profile: React.FC<ProfileProps> = ({closeNavBar}) => {
    const {profileInfo, comments} = useSelector((store: AppStoreType) => store.profile);

    return (
        <div className={s.profile} onClick={closeNavBar}>
            <ProfileInfo profileInfo={profileInfo}/>

            <Comments comments={comments}/>
        </div>
    );
};

export default Profile;
