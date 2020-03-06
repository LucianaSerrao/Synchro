import React, { Component } from 'react';
import {push} from "react-router-redux";
import moment from 'moment';

import store from "../../../../store";
import { Row, Col } from 'reactstrap';
import {PostDescription, PostCompany,Avatar } from './style'

class RelatedPost extends Component {
    
   /* constructor(props) {
        super(props);
    }*/

    goTo = (path) => {
        store.dispatch(push(path))
    }

    handleLike = () => {

    }
    
    handleBookmark = () => {
        
    }

    render() {
        let post = this.props.content;

        return (
            <div>
                <Row className="d-flex mb-4">
                    <Col md="auto">
                        <Avatar>
                            <img src={ post.picture_path } width="80" height="80" alt="" />
                        </Avatar>
                    </Col>
                    <Col className="d-flex flex-column justify-content-between">
                        <PostCompany>{ post.company }</PostCompany>
                        <PostDescription>{ post.description }</PostDescription>
                        <Row>
                            <Col className="pr-0 mr-2" md="auto">
                                <PostDescription>{ moment(post.created_at).format("DD MMM") }  •  { post.readTime }. de leitura</PostDescription>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default RelatedPost