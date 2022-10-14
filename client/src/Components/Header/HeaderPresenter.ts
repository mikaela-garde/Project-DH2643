import React, {useState} from 'react';
import HeaderView from "./HeaderView";


function HeaderPresenter ({NavTitle}) {

    return React.createElement(HeaderView,{
        NavTitle: NavTitle

        })
}


export default HeaderPresenter;

