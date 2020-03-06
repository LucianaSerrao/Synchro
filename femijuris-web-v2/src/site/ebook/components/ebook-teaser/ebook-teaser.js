import React, { Component } from 'react';
import {Col} from 'reactstrap';

import EbookRegisterToDownload from "../ebook-register-to-download/ebook-register-to-download"
import {
    ContainerLPTeaser, RowLPTeaser, H1TeaserTitle, H2TeaserSubTitle, PTeaserActionText,
    DivActionContainer, ColTeaserDesktop, ColTeaserTitleMobile} from "../../../../common/style/landpaging"
import EbookDownloadBox from "../ebook-download-box/ebook-download-box"
import SocialInline from "../social-inline/social-inline"

class EbookTeaser extends Component {

    render() {
        return (
            <ContainerLPTeaser>
                <RowLPTeaser>
                    <ColTeaserTitleMobile xs={12} sm={12} className={'d-md-none text-center'}>
                        <H1TeaserTitle size={25}>{this.props.title}</H1TeaserTitle>
                        <H2TeaserSubTitle size={14}>{this.props.subTitle}</H2TeaserSubTitle>
                    </ColTeaserTitleMobile>
                    <Col xs={12} sm={12} className={'d-md-none text-center'}>
                        <img alt="" width={140} height={230} className={'mx-auto d-block'} src={this.props.cover}/>
                    </Col>
                    <Col xs={12} sm={12} className={'d-md-none text-center'}>
                        <PTeaserActionText size={18}>{this.props.actionText}</PTeaserActionText>
                        <EbookRegisterToDownload actionButtonText={this.props.actionButtonText} actionPlaceHolder={this.props.actionPlaceHolder} mobile={true} action={this.props.action}/>
                        <EbookDownloadBox show={this.props.showDownload} files={this.props.files}/>
                        <SocialInline />
                    </Col>


                    <ColTeaserDesktop md={6} className={'d-none d-md-block text-center'}>
                        <img alt="" width={280} height={470} className={'mx-auto d-block'} src={this.props.cover}/>
                    </ColTeaserDesktop>
                    <ColTeaserDesktop md={6} className={'d-none d-md-block'}>
                        <H1TeaserTitle size={80}>{this.props.title}</H1TeaserTitle>
                        <H2TeaserSubTitle size={25}>{this.props.subTitle}</H2TeaserSubTitle>
                        <DivActionContainer>
                            <PTeaserActionText size={25}>{this.props.actionText}</PTeaserActionText>
                            <EbookRegisterToDownload actionButtonText={this.props.actionButtonText} actionPlaceHolder={this.props.actionPlaceHolder} mobile={false} action={this.props.action}/>
                        </DivActionContainer>
                        <EbookDownloadBox show={this.props.showDownload} files={this.props.files}/>
                        <SocialInline />
                    </ColTeaserDesktop>

                </RowLPTeaser>
            </ContainerLPTeaser>
        );
    }
}
export default EbookTeaser;