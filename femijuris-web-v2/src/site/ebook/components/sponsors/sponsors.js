import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import EbookMerchandisingGrid from "../ebook-merchandising-grid/ebook-merchandising-grid"

class Sponsors extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>Apoiadores</h2>
                        <p>Vivamus consequat sollicitudin sem, vel interdum mi eleifend non. Phasellus malesuada commodo nunc, eu feugiat sem laoreet ac. Donec at elit dapibus, consectetur augue sit amet.</p>
                    </Col>
                </Row>

                <Row>
                    <EbookMerchandisingGrid items={this.props.sponsors}/>
                </Row>
            </Container>
        );
    }
}

export default Sponsors;