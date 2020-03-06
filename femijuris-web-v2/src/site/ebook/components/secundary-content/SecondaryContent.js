import React, { Component } from 'react';
import {Col, Container, Row} from 'reactstrap';
import {DivContent, DivVideoContent, IframeVideo} from './style'

class SecondaryContent extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <DivContent>
                            <h2>Veja como foi o evento de lançamento</h2>
                            <DivVideoContent>
                                <IframeVideo width="560" height="315" src={this.props.introdutoryVideo} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></IframeVideo>
                            </DivVideoContent>
                        </DivContent>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SecondaryContent;