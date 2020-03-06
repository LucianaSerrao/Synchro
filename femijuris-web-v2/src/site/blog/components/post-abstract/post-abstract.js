import React, { Component } from 'react';
import {push} from "react-router-redux";
import moment from 'moment';

import store from "../../../../store";
import { Row, Col } from 'reactstrap';
import {  PostTitle, PostDescription, PostCompany, PostImage, Icon } from './style'

import IconBookMark  from "../../../../common/images/icon/ic-bookmark.svg";
import IconBookMarkOn  from "../../../../common/images/icon/ic-bookmark-on.svg";

import IconLike  from "../../../../common/images/icon/ic-like.svg";
import IconLikeOn  from "../../../../common/images/icon/ic-like-on.svg";

class PostAbstract extends Component {
    
    /*constructor(props) {
        super(props);
    }*/

    goTo = (path) => {
        store.dispatch(push(path))
    }

    handleLike = () => {

    }
    
    handleBookmark = () => {
        
    }

    getActions = () => {
        let post = this.props.content;
        return (
            <Col className="d-flex p-0" md="auto" sm="5" xs="5 justify-content-sm-end">
                <div>
                    <Icon src={ post.flagBookMark ? IconBookMarkOn : IconBookMark  } />
                </div>
                <div className="ml-2" md="auto" sm="5" xs="5 justify-content-sm-end" >
                    <Icon src={ post.flagLike ? IconLikeOn : IconLike } />
                </div>
            </Col>
        )
    }

    render() {
        let post = this.props.content;
        
        if(this.props.mainPost) {
            return(
                <div >
                    <PostImage onClick={() => this.goTo(`/blog/${post.url}`)} src={ post.pictureLarge_path } />
                    <PostTitle onClick={() => this.goTo(`/blog/${post.url}`)}>{ post.title }</PostTitle>
                    <PostDescription>{ post.description }</PostDescription>
                    <PostCompany>{ post.company }</PostCompany>
                    <Row>
                        <Col className="pr-0 mr-4" md="auto" sm="6" xs="5">
                            <PostDescription>{ moment(post.created_at).format("DD MMM") }  •  { post.readTime }. de leitura</PostDescription>
                        </Col>
                        { this.getActions() }
                    </Row>
                </div>
            )
        }

        return (
            <div>
                <Row className="d-inline-flex mb-4" sm="5" xs="5">
                    <Col className="d-flex flex-column justify-content-between">
                        <PostTitle onClick={() => this.goTo(`/blog/${post.url}`)}>{ post.title }</PostTitle>
                        <PostDescription>{ post.description }</PostDescription>
                        <PostCompany>{ post.company }</PostCompany>
                        <Row>
                            <Col className="pr-0 mr-2" md="auto" sm="auto" xs="auto">
                                <PostDescription>{ moment(post.created_at).format("DD MMM") }  •  { post.readTime }. de leitura</PostDescription>
                            </Col>
                            { this.getActions() }
                        </Row>
                    </Col>

                    <Col md="auto" sm="5" xs="5" className="justify-content-sm-end">
                        <div style={{ width:114, height: 126, overflow: 'hidden'}}>
                            <img  onClick={() => this.goTo(`/blog/${post.url}`)}  src={ post.image } width="auto" height="126" alt=""/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PostAbstract