import React from 'react';
import ProfileInfo from "./profile-info/ProfileInfo";
import s from './Profile.module.css';
import Comments from "./comments/Comments";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>

            <Comments/>
        </div>
    );
};

export default Profile;
