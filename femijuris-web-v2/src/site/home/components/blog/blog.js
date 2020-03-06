import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import store from '../../../../store';
import { push } from 'react-router-redux';

import {Col, Row, Container} from "reactstrap";
import { WrapContainer, Title, Text, Link } from './style'
import LatestNews from "../../../blog/components/latest-news/latest-news"

class Blog extends Component {

   /* constructor(props) {
        super(props)
    }*/

    goTo = (path) => {
        store.dispatch(push(path))
    }

    render() {
        return (
            <WrapContainer fluid>
                <Container>
                    <Row>
                        <Col>
                            <Title>Posts recentes do Blog FemiJuris</Title>
                            <Text>Conheça o nosso blog e seja você também uma colunista! Basta <Link href="" onClick={ () => this.goTo('/signup') }>inscrever-se</Link></Text>
                            <LatestNews content={ this.props.posts } />
                        </Col>
                    </Row>
                </Container>
            </WrapContainer>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.blog.posts
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Blog)