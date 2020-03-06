import React, { Component } from 'react'
import store from '../../../../store'
import { push } from 'react-router-redux'
import { Container, Row, Col } from 'reactstrap'

class SummaryItems extends Component {

    constructor(props) {
        super(props)
    }



    render() {

        const ITEMS = this.props.items.map((it,i) => (
            <Row key={i}>
                <Col>
                    <p>{i}</p>
                    <p>{it.title}</p>
                    <p>{it.abstract}</p>
                    <a onClick={() => store.dispatch(push(`${this.props.ebookUri}/${it.uri}`))}>read more</a>
                    <hr/>
                </Col>
            </Row>
        ))

        return (
            <Container fluid>
                {ITEMS}
            </Container>
        );
    }
}

export default SummaryItems;