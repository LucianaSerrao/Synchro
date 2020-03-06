import React, { Component } from 'react';


import { Row, Col } from 'reactstrap';
import { Avatar, NameInitials, AuthorName, AuthorDescription } from './style'

class Author extends Component {

    getNameInitials = () => {
        let names = this.props.name.split(" ");
        let indexOfLastName = names.length - 1;
        return `${ names[0].charAt(0) }${ names[indexOfLastName].charAt(0) }`
    }

    render() {
        return (
            <Row className="d-flex mb-4">
                <Col md="auto">
                    <Avatar>
                        {
                            (this.props.image) ? (
                                <img src={ this.props.image } width="80" height="80" alt=""/>
                            ):(
                                <NameInitials>{ this.getNameInitials() }</NameInitials>
                            )
                        }
                    </Avatar>
                </Col>
                <Col className="d-flex flex-column pl-1">
                    <AuthorName>{ this.props.name }</AuthorName>
                    <AuthorDescription>{ this.props.description }</AuthorDescription>
                </Col>
            </Row>
        )
    }
}

export default Author