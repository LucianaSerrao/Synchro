import React, { Component } from 'react';
import { ProfileImageElement, WrapImage } from './style';

class ProfileImage extends Component {
    render() {
        return (
            <WrapImage>
                <ProfileImageElement 
                    alt={ this.props.altForProfileImage }
                    src={ this.props.profileImageUrl }>
                </ProfileImageElement>
            </WrapImage>
        );
    }
}

export default ProfileImage;
