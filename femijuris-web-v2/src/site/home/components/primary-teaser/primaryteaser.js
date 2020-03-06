import React, { Component } from 'react';
import {TeaserRow} from "./style";
import {Col,Container} from 'reactstrap'
import LeftTeaser from "../left-teaser/leftteaser";
import RightTeaser from "../right-teaser/rightteaser";

class PrimaryTeaser extends Component {

    /*constructor(props) {
        super(props)
    }*/

    render() {
        return (
            <Container>
                <TeaserRow>
                    <Col lg={6}>
                        <LeftTeaser />
                    </Col>

                    <Col lg={6} className={'d-none d-lg-block'}>
                        <RightTeaser />
                    </Col>
                </TeaserRow>
            </Container>
        )
    }
}

export default PrimaryTeaser