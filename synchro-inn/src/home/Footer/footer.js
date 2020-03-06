import React, {Component} from 'react'
import { SContainer, Image, Social, Titles, Subtitles, Other, Search, Button, RowWithMargin, ColWithMargin } from './style.js'
import {Col, Container} from "reactstrap";


class Footer extends Component {

    render() {

        return (
            <SContainer fluid>
                <Container>
                    <RowWithMargin rowMarginBottom = "20px">

                    <Col md="6" lg="5" sm="12" xs="12" className="text-center text-md-left mb-4 mb-md-0">
                         

                    </Col>
                    
                    
                    </RowWithMargin>
                </Container>
            </SContainer>
        )
    }
}

export default Footer