import React, {useState} from 'react';
import ProfileView from "./ProfileView";

function TemplatePresenter (props) {
    const userProfilePic = 0;
    const userName = 0;
    const userSocialMedia = 0;
    const userAbout = 0;
    const userExperienceList = 0;



    return React.createElement(ProfileView, 
        userProfilePic, 
        userName,
        userSocialMedia,
        userAbout,
        userExperienceList
        )
}


export default TemplatePresenter;