import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SummaryItems from "../ebook-summary-items/summary-items"

class EbookSummary extends Component {

    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        <h1>{this.props.ebook.title}</h1>
                        <p>{this.props.ebook.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SummaryItems ebookUri={this.props.ebook.uri} items={this.props.ebook.sections}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default EbookSummary;