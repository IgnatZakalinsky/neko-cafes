import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileInfoType} from "../bll/profileState";

type ProfileInfoProps = {
    profileInfo: ProfileInfoType;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({profileInfo}) => {

    return (
        <div className={s.profileInfo}>
            <div className={s.avatar}>
                <img src={profileInfo.avatar} alt={'avatar'} width={300}/>
            </div>
            <div className={s.info}>
                <div>
                    name: {profileInfo.name}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
