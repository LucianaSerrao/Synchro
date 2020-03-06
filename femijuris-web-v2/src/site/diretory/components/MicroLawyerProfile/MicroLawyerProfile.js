import React, { Component } from 'react';
import {Col, Container} from 'reactstrap'
import {InfoCol,ProfileContainer,ListItem,List,LawyerName,Icon,LocationSpan,Oab,PhoneSpan,SpecialtiesListDiv} from './style'
import ProfileImage from "../ProfileImage/ProfileImage"

class MicroLawyerProfile extends Component {

    constructor(props) {
        super(props);
        this.formatPhone = this.formatPhone.bind(this)
    }

    formatPhone(phone) {
        return `(${phone.substring(0,2)}) ${phone.substring(2,20)}`
    }

    render() {
        return (
            <Container fluid>
                <ProfileContainer>
                    <Col xs={3} sm={3} md={3}>
                        <ProfileImage pic={this.props.pic}/>
                    </Col>
                    <InfoCol xs={9} sm={9} md={9}>
                        <LawyerName>{this.props.name}</LawyerName>
                        <Oab>
                            <span><Icon className={`material-icons ${this.props.className}`}>gavel</Icon>{(this.props.oabUf)? `OAB/${this.props.oabUf}`:`OAB/` } {this.props.oab}</span>
                            <PhoneSpan><Icon className={`material-icons ${this.props.className}`}>phone_iphone</Icon>{this.formatPhone(this.props.phone)}</PhoneSpan>
                        </Oab>
                        <p>
                            {
                                this.props.addresses.slice(0,5).map((it,key) => {
                                    return (
                                        <LocationSpan key={key}><Icon className={`material-icons ${this.props.className}`}>location_on</Icon>{it.city}-{it.state}</LocationSpan>
                                    )
                                })
                            }
                        </p>
                        <SpecialtiesListDiv>
                            <List>
                                {this.props.myAreas.slice(0,8).map((area, index) => {
                                    return(
                                            <ListItem key={index}>{area}</ListItem>
                                    )
                                })}
                            </List>
                        </SpecialtiesListDiv>
                    </InfoCol>
                </ProfileContainer>
            </Container>
        )
    }

}

export default MicroLawyerProfile;