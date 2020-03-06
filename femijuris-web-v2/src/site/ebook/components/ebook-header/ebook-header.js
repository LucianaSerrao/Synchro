import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import {RowHeader} from './style'

class EbookHeader extends Component {
    render() {
        return (
            <Container>
                <RowHeader>
                    <Col>
                        <a href={"/"}>
                            <img alt="" src={'http://femijuris.com.br/images/site/cinza-frio-logo-horizontal-236-x-50.png'} />
                        </a>
                    </Col>
                </RowHeader>
            </Container>
        );
    }
}
export default EbookHeader;