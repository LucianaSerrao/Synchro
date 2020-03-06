import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { Row, Col, Container } from 'reactstrap';
import { WrapContainer, Article, Icon } from './style'
import Menu from "../../home/components/menu/menu";
import ReactQuill from 'react-quill'
import RelatedPost from "../components/related-post/related-post"
import IconBookMark  from "../../../common/images/icon/ic-bookmark.svg";
import IconBookMarkOn  from "../../../common/images/icon/ic-bookmark-on.svg";
import IconLike  from "../../../common/images/icon/ic-like.svg";
import IconLikeOn  from "../../../common/images/icon/ic-like-on.svg";
import {clearShownPost, fetchBlogPostByUri, fetchDeltaPost} from "../blog-actions";


class Post extends Component {

    /*constructor(props) {
        super(props)
    }*/

    componentDidMount() {
        this.props.fetchBlogPostByUri(this.props.match.params.postUri)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.post !== null && typeof this.props.post !== 'undefined') {
            if (!this.props.delta) {
                this.props.fetchDeltaPost(this.props.post.fileName)
            }
        }
    }

    componentWillUnmount() {
        this.props.clearShownPost(this.props.post.url)
    }

    render() {

        let {post,delta} = this.props

        if (!post || !delta)
            return (<h1>Carregando ...</h1>);


        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Menu/>
                        </Col>
                    </Row>
                </Container>
                <WrapContainer fluid>
                    <Container>
                        <Row className="d-block ">
                            <RelatedPost content={ post } />
                        </Row>
                        <Row>
                            <Col>
                                <Article>
                                    <ReactQuill theme="bubble"
                                                ref={ (quill) => { this.quill = quill; } }
                                                modules={{ toolbar:[] }}
                                                value={ delta }
                                                readOnly={ true } />

                                    <Col className="d-flex justify-content-center mb-5" md="auto" sm="6">
                                        <div>
                                            <Icon src={ post.flagBookMark ? IconBookMarkOn : IconBookMark  } />
                                        </div>
                                        <div className="ml-2" sm="6" xs="6">
                                            <Icon src={ post.flagLike ? IconLikeOn : IconLike } />
                                        </div>
                                    </Col>
                                </Article>
                            </Col>   
                        </Row>
                        <Row>
                            <Col>
                                {
                                    // TODO
                                    // postList.map( (post, index) => {
                                    //     if( index < 5)
                                    //         return <RelatedPost content={ post } />
                                    //     return null
                                    // })
                                }
                            </Col>
                        </Row>
                    </Container>
                </WrapContainer>
            </div>
        )
    }
}

const mapStateToProps = state => {

    console.log(state)

    return {
        ebooks: state.ebooks,
        post: state.blog.shownPost,
        delta: state.blog.shownPostDelta
    }
};
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchBlogPostByUri,
    fetchDeltaPost,
    clearShownPost
}, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Post)