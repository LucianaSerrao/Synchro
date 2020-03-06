import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SignInElements } from "./style";
import { InputForm, ButtonForm} from "../../lawyer-detail/components/lawyer-contac-form/style"
import Logo from "../../../common/images/logo-white.svg";
import {doLogin} from "../signin-actions";
import store from "../../../store";
import {push} from "react-router-redux";
import {getLoggedlUser} from "../../../root-action";

class SignInPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: null,
            password: null
        };

        this.props.getLoggedlUser()
        if (this.props.loggedIn) {
            store.dispatch(push('/'))
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState[e.target.name] = e.target.value;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.loggedIn) {
            store.dispatch(push('/'))
            return false
        }
        return true
    }


    render() {
        return (
        <SignInElements.WrapLogin>
            <SignInElements.LoginBox>
                <SignInElements.LogoImg src={ Logo }/>
                <SignInElements.WrapInputs>
                    <InputForm
                        type="text"
                        placeholder="email"
                        name="email"
                        onChange= { this.handleInput }/>

                    <InputForm
                        type="password"
                        placeholder="senha"
                        name="password"
                        onChange= { this.handleInput }/>

                </SignInElements.WrapInputs>
                <ButtonForm block onClick={()=> this.props.doLogin(this.state.email,this.state.password)}>Acessar</ButtonForm>
                <SignInElements.WrapLink>
                    <Link to="/signup"><SignInElements.Link href="#" rel="noreferrer">Criar conta</SignInElements.Link></Link>
                    {/* <br/><SignInElements.PasswordRecover href="#" rel="noreferrer">Esqueci minha senha</SignInElements.PasswordRecover> */}
                </SignInElements.WrapLink>
            </SignInElements.LoginBox>
        </SignInElements.WrapLogin>);
    }
} 

const mapStateToProps = state => ({
    loggedIn: state.signin.loggedIn || state.auth.loggedIn
})

const mapDispatchToProps = dispatch => bindActionCreators({doLogin,getLoggedlUser}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage)