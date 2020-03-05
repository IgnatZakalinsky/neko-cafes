import React from 'react';
import ProfileInfo from "./profile-info/ProfileInfo";
import s from './Profile.module.css';
import Comments from "./comments/Comments";

type ProfileProps = {
    closeNavBar: () => void;
}

const Profile: React.FC<ProfileProps> = ({closeNavBar}) => {
    return (
        <div className={s.profile} onClick={closeNavBar}>
            <ProfileInfo/>

            <Comments/>
        </div>
    );
};

export default Profile;
