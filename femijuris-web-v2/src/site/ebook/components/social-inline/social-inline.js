import React, { Component } from 'react';
import insta from './images/instagram.png'
import linkedin from './images/linkedin.png'
import face from './images/facebook.png'
import {SocialDiv} from './style'
import constants from "../../../../config/constants"

class SocialInline extends Component {

    render() {
        return (
            <SocialDiv>
                <a target="_blank" href={constants.instagramLink}>
                    <img src={insta} height={"40px"} width={"40px"} alt="" />
                </a>

                <a target="_blank" href={constants.facebookLink}>
                    <img src={face} height={"34px"} width={"34px"} alt=""/>
                </a>

                <a target="_blank" href={constants.linkedinLink}>
                    <img style={{marginLeft:'3px'}} src={linkedin} height={"34px"} width={"34px"} alt="" />
                </a>
            </SocialDiv>
        )
    }

}

export default SocialInline;