import React from 'react';
import ProfileInfo from "./profile-info/ProfileInfo";
import s from './Profile.module.css';
import Comments from "./comments/Comments";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../main/store/store";
import AddComment from "./add-comment/AddComment";

type ProfileProps = {

}

const Profile: React.FC<ProfileProps> = () => {
    const {profileInfo, comments} = useSelector((store: AppStoreType) => store.profile);

    return (
        <div className={s.profile}>
            <ProfileInfo profileInfo={profileInfo}/>

            <AddComment send={(message) => alert(message)}/>

            <Comments comments={comments}/>
        </div>
    );
};

export default Profile;
