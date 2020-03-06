import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchLawyer } from "../../../actions/lawyerDetailsActions";
import { TabContent
       , NavItem } from 'reactstrap';
import classnames from 'classnames';
import { Background
       , WrapContent
       , WrapProfileInfo
       , WrapContact
       , WrapTags
       , WrapMap
       , WrapBox
       , RowNoPadding
       , ContentBox
       , ColNoPadding
       , WrapMobileBox
       , MobileTabLink
       , MobileTabs
       , MobileTabPane
       , LawyerDetailImages
       , CustomReactLoading } from "./style";
// images
import mailIcon from "../../../common/images/icon/ic-email.svg";
import phoneIcon from "../../../common/images/icon/ic-telefone.svg";

//commom components
import { LawyerDetail } from '../../../common/typography';

//components
import WavyBackground from "../components/wavy-background";
import ProfileImage from "../components/profile-image";
import Map from "../components/map";
import LawyerAbout from "../components/lawyer-about";
import LawyerContact from "../components/lawyer-contact";
import LawyerActions from "../components/lawyer-actions";


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

function phoneMask(phone){
    return "("+phone.substring(0, 2)+") " + phone.substring(2, phone.length - 4) + "-" + phone.substring(phone.length - 4)
}

//TODO colocar endpoint atua em, serviço de correspondencia e um objeto social = {instagram:"", facebook:"", linkedin:""} para contatos com a rede social
class LawyerDetailPage extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
            activeTab: tab
            });
        }
    }

    componentWillMount() {

    }
    
    componentDidMount() {
        const { lawyerUri } = this.props.match.params;
        this.props.fetchLawyer(lawyerUri);
    }

    render() {
        const { profile, error, loading } = this.props.lawyer;
        console.log('eu:',profile)
        if ( error ) return (<h1>ERROR</h1>)
        if ( loading ) return (
            <div id="loading-container" style={{height: '100vh', width: '100%', display: 'flex'}}>
                <CustomReactLoading type={'spinningBubbles'} color={'#be9a69'} height={'50px'} width={'50px'} />
            </div>
        )
        if ( profile )  return (
        <Background>
            <WrapContent>
                <WavyBackground/>
                <WrapProfileInfo>
                    <ProfileImage
                        profileImageUrl={ 
                            profile.picture_path || NoneProfile }
                        altForProfileImage={ profile.name }></ProfileImage>
                    <RowNoPadding><LawyerDetail.pageTitle>{ profile.name }</LawyerDetail.pageTitle></RowNoPadding>
                    <RowNoPadding><LawyerDetail.oabNumber>{`OAB: ${ profile.oab } - ${ profile.oab_uf }`}</LawyerDetail.oabNumber></RowNoPadding>
                    { profile.areas.length > 0 &&  
                        <RowNoPadding>
                        <WrapTags>
                        { profile.areas.map(function(area){
                            return <LawyerDetail.sectorTag>{ area.name }</LawyerDetail.sectorTag>
                        })}
                        </WrapTags>
                        </RowNoPadding>
                    }
                    <RowNoPadding>
                        <WrapContact>
                            { profile.email &&
                            <LawyerDetail.hiddenLink href={`mailto:${ profile.email }`} rel="nofollow">
                                <LawyerDetailImages.icon.mail 
                                src={ mailIcon }/>{ profile.email }</LawyerDetail.hiddenLink>  
                            } { profile.phone &&
                            <LawyerDetail.hiddenLink href={`tel:${ profile.phone }`} rel="nofollow">
                            <LawyerDetailImages.icon.phone 
                                src={ phoneIcon }/>{ phoneMask(profile.phone) }</LawyerDetail.hiddenLink>
                            }
                        </WrapContact>
                    </RowNoPadding>
                </WrapProfileInfo>
                <WrapMap>
                    <Map latLng={{ lat: profile.address.lat, lng: profile.address.lng }} name={ profile.address.name }/>
                </WrapMap>
            </WrapContent>
            <WrapContent>
                <RowNoPadding>
                <ColNoPadding>
                        <WrapMobileBox>
                            <MobileTabs tabs>
                                <NavItem>
                                    <MobileTabLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                    >
                                    sobre
                                    </MobileTabLink>
                                </NavItem>
                                <NavItem>
                                    <MobileTabLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                    >
                                    linha do tempo
                                    </MobileTabLink>
                                </NavItem>
                                <NavItem>
                                    <MobileTabLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                    >
                                    contato
                                    </MobileTabLink>
                                </NavItem>
                            </MobileTabs>
                            <TabContent activeTab={ this.state.activeTab }>
                                <MobileTabPane tabId="1">
                                    <LawyerAbout profile={profile}/>
                                </MobileTabPane>
                                <MobileTabPane tabId="2">
                                    { profile.actions.map(function(action){
                                        return <LawyerActions action={action}/>
                                    })}
                                </MobileTabPane>
                                <MobileTabPane tabId="3">
                                    <LawyerContact social={ profile.social }/>
                                </MobileTabPane>
                            </TabContent>
                        </WrapMobileBox>
                    </ColNoPadding>
                    <ColNoPadding xs="12" md="5" lg="5" xl="5" id="leftColumn">
                    <WrapBox>
                        <LawyerDetail.contentTitle>Sobre</LawyerDetail.contentTitle>
                        <LawyerAbout profile={profile}/>
                    </WrapBox>
                        <WrapBox>
                            <LawyerDetail.contentTitle>Contato</LawyerDetail.contentTitle>
                            <LawyerContact social={ profile.social }/>
                        </WrapBox>
                    </ColNoPadding>
                    <ColNoPadding xs="12" md="7" lg="7" xl="7">
                        <WrapBox className="lawyer-actions">
                            <LawyerDetail.contentTitle>Linha do tempo</LawyerDetail.contentTitle>
                            <ContentBox className="lawyer-actions">
                                { profile.actions.map(function(action){
                                    return <LawyerActions action={action}/>
                                })}
                            </ContentBox>
                        </WrapBox>
                    </ColNoPadding>
                </RowNoPadding>
            </WrapContent>
        </Background>)
        return (<h1>NOT FOUND</h1>)
    }
}

const mapStateToProps = state => ({
    lawyer: state.lawyer,
})

const mapDispatchToProps = dispatch => bindActionCreators({ fetchLawyer }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LawyerDetailPage)