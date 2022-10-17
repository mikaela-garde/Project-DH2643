import React, {useState} from 'react';
import useModelProp from '../../useModelProp';
import {UserModel} from '../../app';
import ProfileView from "./ProfileView";
import NoDataView from '../NoData/NoDataView';


function ProfilePresenter (props) {
  /*
    const userProfileImg= useModelProp(UserModel, "profile_img");
    const userFirstName = useModelProp(UserModel, "first_name");
    const userLastName = useModelProp(UserModel, "last_name");
    const userSocialMedia = useModelProp(UserModel, "social_media");
    const userDescription = useModelProp(UserModel, "description");
    const userExperienceList = useModelProp(UserModel, "experiences");

    const data = [userProfileImg, userFirstName, userLastName, userSocialMedia, userDescription, userExperienceList]
    let dataRetrieved = data.some(dt => dt === undefined || dt.length === 0 || dt === null );
*/
    return NoDataView()
    /*
    dataRetrieved ? NoDataView() : React.createElement(ProfileView, 
        userProfileImg, 
        userFirstName,
        userLastName,
        userSocialMedia,
        userDescription,
        userExperienceList
        )*/
}


export default ProfilePresenter;