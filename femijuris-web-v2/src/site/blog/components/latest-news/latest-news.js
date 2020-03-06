import React, { Component } from 'react';

import {push} from "react-router-redux";

import store from "../../../../store";
import PostAbstract from '../post-abstract/post-abstract'
import { Row, Col } from 'reactstrap';
import { } from './style'

class LatestNews extends Component {

    goTo = (path) => {
        store.dispatch(push(path))
    }

    render() {
        let mainPost = this.props.content[0];
        let nextThreePosts = [].concat(this.props.content).splice(1, 3);
        return (
            <Row>
                <Col lg="8" md="12" sm="5" className="pr-lg-3 ">
                    <PostAbstract   mainPost={ true } 
                                    content={ mainPost } />
                </Col>
                <Col lg="4" md="12" sm="5">
                    { nextThreePosts.map( post => 
                        <PostAbstract content={ post } /> 
                    ) }
                </Col>
            </Row>
        )
    }
}

export default LatestNews