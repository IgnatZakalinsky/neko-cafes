import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.avatar}>
                <img
                    src={'https://i.pinimg.com/236x/d5/5d/13/d55d13b20b736ae5901218587af9c535.jpg'}
                    alt={'avatar'}
                    width={300}
                />
            </div>
            <div className={s.info}>
                <div>
                    name: Neko Nyakus
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
