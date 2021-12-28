import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img
                    src='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>)
}

export default ProfileInfo;