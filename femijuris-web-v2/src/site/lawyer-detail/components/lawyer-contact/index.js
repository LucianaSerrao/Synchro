import React, { Component } from 'react';

import { LawyerDetail } from '../../../../common/typography';
import { ContentBox } from "../../containers/style";
import  LawyerContacForm  from "../lawyer-contac-form";
import { SocialIcon } from "./style";
// images
import faceIcon from "../../../../common/images/icon/ic-facebook.svg";
import linkedinIcon from "../../../../common/images/icon/ic-linkedin.svg";
import instagramIcon from "../../../../common/images/icon/ic-instagram.svg";

class LawyerContact extends Component {
    render(){
        return(
        <div>
            { this.props.social &&
            <ContentBox>
                {
                    this.props.social.facebook &&
                    <LawyerDetail.contactText href={this.props.social.facebook} target="_blank"><SocialIcon src={ faceIcon } alt="Acesso ao facebook"/></LawyerDetail.contactText>
                }{
                    this.props.social.linkedin &&
                    <LawyerDetail.contactText href={this.props.social.linkedin} target="_blank"><SocialIcon src={ linkedinIcon } alt="Acesso ao linkedin"/></LawyerDetail.contactText>
                }{
                    this.props.social.instagram &&
                    <LawyerDetail.contactText href={this.props.social.instagram} target="_blank"><SocialIcon src={ instagramIcon } alt="Acesso ao instagram"/></LawyerDetail.contactText>
                }
            </ContentBox>
            }
            <ContentBox>
                <LawyerDetail.centerTitle>- Ou envie uma mensagem -</LawyerDetail.centerTitle>
            </ContentBox>
            <ContentBox>
                <LawyerContacForm/>
            </ContentBox>
        </div>
    )}
}

export default LawyerContact;