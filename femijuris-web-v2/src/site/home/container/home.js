import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Header from "../components/header/header";
import About from "../components/about/about";
import Blog from "../components/blog/blog";

import {fetchByUri} from "../home-actions"
import {getLoggedlUser, logout} from "../../../root-action";
import store from "../../../store";
import {push} from "react-router-redux";
import Footer from "../components/footer/footer"

class Home extends Component {

    constructor(props) {
        super(props)
        this.props.getLoggedlUser()
        this.doLogout = this.doLogout.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    componentDidMount() {
        // const ebookIdOnUrl = `/ebook/trabalhista-vol-1`
        // this.props.fetchByUri(ebookIdOnUrl)
    }

    goTo(path) {
        store.dispatch(push(path))
    }

    doLogout() {
        this.props.logout()
    }

    render() {
        return (
            <div>
                <Header
                        goTo={this.goTo}
                        logout={this.doLogout}
                        loggedIn={this.props.loggedIn}
                        ebooks={this.props.ebooks} />
                <About/>
                <Blog />
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ebooks: state.ebooks,
    loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => bindActionCreators({fetchByUri,getLoggedlUser,logout}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Home)