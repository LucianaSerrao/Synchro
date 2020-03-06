import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap'
import MicroLawyerProfile from "../MicroLawyerProfile/MicroLawyerProfile"
import constants from '../../../../config/constants'
import EmptyLoadingBox from "../EmptyLoadingBox/EmptyLoadingBox";

class DetailedLawyerList extends Component {

    constructor(props) {
        super(props)
        this.makeMappedIdNameAreas = this.makeMappedIdNameAreas.bind(this)
        this.getAreasNameFrom = this.getAreasNameFrom.bind(this)
        this.composePicUrl = this.composePicUrl.bind(this)
    }

    composePicUrl(key) {
        return (key) ? `${constants.baseUrl}/${key}`:''
    }

    componentWillMount() {
        this.setState({mappedIdName: this.makeMappedIdNameAreas(this.props.areas)})
    }

    makeMappedIdNameAreas(areas) {
        return areas.reduce( (acc,area) => {
            acc[area.id] = area.name
            return acc;
        },{})
    }

    getAreasNameFrom(ids) {
        return ids.map( (id) => this.state.mappedIdName[id])
    }

    render() {

        return (
            <Container fluid>
                <Row>
                    {this.props.lawyers.map((item, index) => {
                        return(
                            <Col md="6" lg="6" key={index}>
                                <MicroLawyerProfile
                                                    onSelectLawyerToMsg={this.props.onSelectLawyerToMsg}
                                                    myAreas={this.getAreasNameFrom(item.areas)}
                                                    addresses={item.addresses}
                                                    phone={item.phone}
                                                    email={item.email}
                                                    name={item.name}
                                                    oab={item.oab}
                                                    oabUf={item.oab_uf}
                                                    id={item.id}
                                                    pic={ !item.picture_path ? item.picture_path : this.composePicUrl(item.picture_path) } />
                            </Col>
                        )
                    })}

                    {
                        (this.props.lawyers.length === 0) ?

                            [1,2,3,4].map((it,index) => (<Col md="6" lg="6" key={index}><EmptyLoadingBox/></Col>) )
                            : null
                    }
                </Row>
            </Container>
        )
    }

}

export default DetailedLawyerList;