import React, { Component } from 'react';

import { LawyerDetail } from '../../../../common/typography';

import { ContentBox } from "../../containers/style";

class LawyerAbout extends Component {
    render(){
        return(
            <div>
                {   this.props.profile.addresses &&
                    <ContentBox>
                        <LawyerDetail.contentLabels>Atua em:</LawyerDetail.contentLabels>
                        <LawyerDetail.contentTextList>
                        { this.props.profile.addresses.map(function(address){
                            return (<li>{address.city} - {address.state}</li>)
                        })}
                        </LawyerDetail.contentTextList>
                    </ContentBox>
                }
                {   !this.props.profile.correio &&
                    <ContentBox>
                        <LawyerDetail.contentLabels>Serviços de correspondência:</LawyerDetail.contentLabels>
                        <LawyerDetail.contentTextList>
                            <li>Verificar o que vai vir aqui</li>
                        </LawyerDetail.contentTextList>
                    </ContentBox>
                }
                {   this.props.profile.bio &&
                    <ContentBox>
                        <LawyerDetail.contentLabels>Bio:</LawyerDetail.contentLabels>
                        <LawyerDetail.contentText>
                        {this.props.profile.bio}
                        </LawyerDetail.contentText>
                    </ContentBox>
                }
            </div>
    )}
}

export default LawyerAbout;