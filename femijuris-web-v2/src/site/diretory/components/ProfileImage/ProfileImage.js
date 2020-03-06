import React, { Component } from 'react';
import famale_avatar from './images/female_avatar.png'
import {ProfileImg} from './style.js'

class ProfileImage extends Component {

    render() {
        return (
            <div>
                <ProfileImg className={`rounded-circle ${this.props.className}`} alt="" src={ (this.props.pic) ? this.props.pic: famale_avatar } />
            </div>
        )
    }

}

export default ProfileImage;