import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Col, Row } from 'reactstrap';
import { Background
       , WrapContent
       , WrapBox
       , RowNoPadding
       , ColNoPadding
       , WrapFlex
       , LawyerDetailImages
       , SocialIcon
       , CustomImageUploader
       , InputForm
       , ButtonForm
       , CustomChipInput } from "./style";
// images
import mailIcon from "../../../common/images/icon/ic-email.svg";
import phoneIcon from "../../../common/images/icon/ic-telefone.svg";
import linkedinIcon from "../../../common/images/icon/ic-linkedin.svg"
import instagramIcon from "../../../common/images/icon/ic-instagram.svg"
import facebookIcon from "../../../common/images/icon/ic-facebook.svg"
//commom components
import { LawyerDetail } from '../../../common/typography';
//components
import ProfileImage from "../components/profile-image";


const NoneProfile = (function(){
    switch(Math.floor(1 + Math.random()*(4+1 - 1))) {
        case 1:
            return require("../../../common/images/none_profile_1.svg");
        case 2:
            return require("../../../common/images/none_profile_2.svg");
        case 3:
            return require("../../../common/images/none_profile_3.svg");
        case 4:
            return require("../../../common/images/none_profile_4.svg");
        default:
            return require("../../../common/images/none_profile_4.svg");
    }
})()


class ProfilePage extends Component {

    /*constructor(props) {
        super(props);
      }*/

    render() {
        return (
        <Background>
            <WrapContent>
                <Row>
                <WrapBox>
                    <LawyerDetail.centerTitle>EDITAR PERFIL</LawyerDetail.centerTitle>
                    {/* <RowNoPadding>
                        <LawyerDetail.contentTitle>Perfil</LawyerDetail.contentTitle>
                    </RowNoPadding> */}
                    <RowNoPadding>
                    <ColNoPadding xs="12" md="2" lg="2" xl="2">
                        <ProfileImage
                            profileImageUrl={ NoneProfile }
                            />
                        <CustomImageUploader
                            singleImage={true}
                            withIcon={false}
                            withLabel={false}
                            buttonText='Escolher imagem'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.png']}
                            maxFileSize={5242880}
                        />
                    </ColNoPadding>  
                    <ColNoPadding xs="12" md="10" lg="10" xl="10">
                        <RowNoPadding>
                            <Col xs="12" md="6">
                                <InputForm placeholder="Nome" block/>
                            </Col>
                            <Col xs="12" md="6">
                                <InputForm placeholder="Sobrenome" block/>
                            </Col>
                        </RowNoPadding>
                        <RowNoPadding>
                        <Col xs="12" md="6">
                            <WrapFlex>
                                <LawyerDetailImages.icon.phone src={phoneIcon}/>
                                <InputForm placeholder="Telefone" block/>
                            </WrapFlex>
                        </Col>
                        <Col xs="12" md="6">
                            <WrapFlex>
                                <LawyerDetailImages.icon.mail src={mailIcon}/>
                                <InputForm placeholder="Email" block/>
                            </WrapFlex>
                        </Col>
                        </RowNoPadding>
                        <RowNoPadding>
                        <Col xs="6" md="3">
                            <InputForm placeholder="OAB" block/>
                        </Col>
                        <Col xs="6" md="3">
                            <InputForm placeholder="Estado" block/>
                        </Col>
                        <Col xs="6" md="3">
                            <InputForm placeholder="Senha" block type="password" />
                        </Col>
                        <Col xs="6" md="3">
                            <InputForm placeholder="Confirmação da senha" type="password" block/>
                        </Col>
                        </RowNoPadding>
                    </ColNoPadding>  
                    </RowNoPadding>
                    <hr/>
                    <RowNoPadding>
                        <LawyerDetail.contentTitle>Atuação</LawyerDetail.contentTitle>
                    </RowNoPadding>
                    <RowNoPadding>
                    <ColNoPadding xs="12" md="2" lg="2" xl="2">
                    </ColNoPadding>  
                    <ColNoPadding xs="12" md="10" lg="10" xl="10">
                        <RowNoPadding>
                            <Col xs="12" md="6">
                            <RowNoPadding>
                                <InputForm placeholder="Biografia" type="textarea" maxLength="280" height="180px" />
                            </RowNoPadding>
                            <RowNoPadding>
                                <ColNoPadding xs="12">
                                    <WrapFlex>
                                        <SocialIcon src={linkedinIcon}/>
                                        <InputForm placeholder="Linkedin" disabled/>
                                    </WrapFlex>
                                </ColNoPadding>
                            </RowNoPadding>
                            <RowNoPadding>
                                <ColNoPadding xs="12">
                                    <WrapFlex>
                                        <SocialIcon src={ facebookIcon }/>
                                        <InputForm placeholder="Facebook" disabled/>
                                    </WrapFlex>
                                </ColNoPadding>
                            </RowNoPadding>
                            <RowNoPadding>
                                <ColNoPadding xs="12">
                                <WrapFlex>
                                    <SocialIcon src={instagramIcon}/>
                                    <InputForm placeholder="Instagram" disabled/>
                                </WrapFlex>
                                </ColNoPadding>
                            </RowNoPadding>
                            </Col>
                            <Col xs="12" md="6">
                            <RowNoPadding>
                                <InputForm placeholder="Endereço do escritorio" disabled/>
                            </RowNoPadding>
                            <RowNoPadding>
                                <CustomChipInput placeholder="Cidades de atuação"/>
                            </RowNoPadding>
                            <RowNoPadding>
                                <CustomChipInput inkbar={{'&:after': {height:0}}} placeholder="Especialidades"/>
                            </RowNoPadding>
                                
                            </Col>
                        </RowNoPadding>
                    </ColNoPadding>  
                    </RowNoPadding>
                    <RowNoPadding>
                    <ColNoPadding xs="12" md="2" lg="2" xl="2">
                    <ButtonForm>Salvar</ButtonForm>
                    </ColNoPadding> 
                    </RowNoPadding>
                </WrapBox>
                </Row>
            </WrapContent>
        </Background>)
    }
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)