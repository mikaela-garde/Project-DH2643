import React from 'react';
import styled from "styled-components";
import BoardSVG from "../../Images/board.svg";
import FriendsSVG from "../../Images/friends.svg";
import { PrimaryBtn } from '../../StyledComponents';


const DashboardView= ({}) =>

    <div>
        <CreateExpButton>Create Experience</CreateExpButton>
    </div>
;

const CreateExpButton = styled.button`
    ${PrimaryBtn}
`;


export default DashboardView;