import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import classnames from 'classnames';
import { TabContent, TabPane, NavItem, Row, Col, Container } from 'reactstrap';

import PostAbstract from "../components/post-abstract/post-abstract"
import { WrapContainer, SectionTitle, MobileTabs,
        MobileTabLink,  Border, WhiteBorder, Rectangle,
         Frase} from './style'

import LatestNews from "../components/latest-news/latest-news"
import Author from "../components/author/author"
import Footer from "../../home/components/footer/footer";
import Menu from "../../home/components/menu/menu";



class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1'
        };
    }

    componentDidMount() {

    }

    toggle = (activeTab) => {
        if (this.state.activeTab !== activeTab) {
            this.setState({ activeTab });
        }
    }

    isTabActive = (keyTab) => classnames({ active: this.state.activeTab === keyTab })


    render() {

        let postList = this.props.posts;


        return (
            <Border fluid>
                <Row>
                    <Col>
                        <Menu />
                    </Col>
                </Row>

                <WhiteBorder fluid>
                    <Row>
                        <Col className="d-none d-sm-none d-md-block">

                            <Frase> Estou procurando...  </Frase>
                            <Rectangle></Rectangle>
                        </Col>

                    </Row>


                    <WrapContainer fluid>
                        <Container>
                            <Row>
                                <Col>

                                    <MobileTabs tabs>

                                        <NavItem>
                                            <MobileTabLink className={ this.isTabActive('1') } onClick={() => { this.toggle('1'); }}>
                                                Todos
                                            </MobileTabLink>
                                        </NavItem>
                                        <NavItem>
                                            <MobileTabLink className={ this.isTabActive('2') } onClick={() => { this.toggle('2'); }}>
                                                Categoria 1
                                            </MobileTabLink>
                                        </NavItem>
                                        <NavItem>
                                            <MobileTabLink className={ this.isTabActive('3') } onClick={() => { this.toggle('3'); }}>
                                                Categoria 2
                                            </MobileTabLink>
                                        </NavItem>
                                        <NavItem>
                                            <MobileTabLink className={ this.isTabActive('4') } onClick={() => { this.toggle('4'); }}>
                                                Categoria 3
                                            </MobileTabLink>
                                        </NavItem>
                                    </MobileTabs>

                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            <div className="mt-3">
                                                <LatestNews content={ postList } />
                                            </div>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <div className="mt-3">
                                                <p>Categoria 1</p>

                                            </div>
                                        </TabPane>
                                    </TabContent>
                                </Col>
                            </Row>
                            <hr/>
                            
                            <Row className="pt-4">
                                <Col lg="8" md="12" sm="5" xs="5"className="d-none d-lg-block">
                                    <section>
                                        <SectionTitle>Categoria 1</SectionTitle>
                                        {
                                            postList.map( (post, index) => {
                                                if( index > 3)
                                                    return <PostAbstract content={ post } />
                                                return null
                                            })
                                        }
                                    </section>
                                </Col>
                                <Col lg="4" md="12" className="d-none d-lg-block">
                                    <section>
                                        <SectionTitle>Autoras Recentes</SectionTitle>
                                        {
                                            postList.map( (post, index) => {
                                                if(post.hightlight === true )
                                                    return (
                                                        <Author name={ post.author.name }
                                                                description={ post.author.description }
                                                                image={ post.author.image } />
                                                    )
                                                return null
                                            })
                                        }
                                    </section>
                                </Col>
                            </Row>


                        </Container>
                    </WrapContainer>


                </WhiteBorder>

                <Footer/>

            </Border>


        )
    }
}

const mapStateToProps = state => {

    return {
        ebooks: state.ebooks,
        posts: state.blog.posts
    }
};
const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Blog)