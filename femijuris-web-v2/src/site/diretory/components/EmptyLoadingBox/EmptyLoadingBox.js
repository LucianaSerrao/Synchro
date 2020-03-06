import React, { Component } from 'react';
import {ProfileContainer} from "./style";
import CircularProgress from "@material-ui/core/CircularProgress";

class EmptyLoadingBox extends Component {

    render() {
        return (
            <ProfileContainer>
                <CircularProgress  thickness={1} size={100}/>
            </ProfileContainer>
        )
    }

}

export default EmptyLoadingBox;