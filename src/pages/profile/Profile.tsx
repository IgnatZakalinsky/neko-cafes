import React from 'react';
import ProfileInfo from "./profile-info/ProfileInfo";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>

            <ProfileInfo/>

            <div>
                comments
            </div>
        </div>
    );
};

export default Profile;
