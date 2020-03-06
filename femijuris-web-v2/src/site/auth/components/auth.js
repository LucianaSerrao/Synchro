import React, { Component } from 'react';
import {Input} from '../../../common/style/style'
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCQFoBa5zBcyLIgq3qZUFn6SLORGVJN1Ks",
    authDomain: "femijuris-project.firebaseapp.com",
    databaseURL: "https://femijuris-project.firebaseio.com",
    projectId: "femijuris-project",
    storageBucket: "femijuris-project.appspot.com",
    messagingSenderId: "292930922784"
};

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {email: '',password: ''};
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.exposeUser = this.exposeUser.bind(this);
        this.sendEmailVerification = this.sendEmailVerification.bind(this);
        this.userLogOut = this.userLogOut.bind(this);

        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged(function(user) {
            console.log('onAuthStateChanged ==> ',user)
            if (user) {
                // User is signed in.
            } else {
                // No user is signed in.
            }
        });
    }

    userLogOut = () => {
        firebase.auth().signOut().then(function() {
            console.log('logged out')
        }).catch(function(error) {
            console.log('error: ',error)
        });
    }

    handleSignUp = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                console.log('signed up')
            })
            .catch(function(error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode,errorMessage)
            });
    }

    handleSignIn = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                console.log('signed in')
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode,errorMessage)
            });
    }

    sendEmailVerification = () => {
        firebase.auth().currentUser.sendEmailVerification().then(()=>{
            console.log('sendEmailVerification then')
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode,errorMessage)
        })
    }

    exposeUser = () => {
        console.log(firebase.auth().currentUser)
    }

    render() {

        let {email,password} = this.state

        return (
            <div>
                <div>
                    <Input
                        onChange={(e) => this.setState({...this.state,email: e.target.value})}
                        value={email} placeholder={"email"} />
                </div>

                <div>
                    <Input
                        onChange={(e) => this.setState({...this.state,password: e.target.value})}
                        value={password} placeholder={"senha"} type="password"/>
                </div>

                <div><button onClick={this.handleSignUp}>Criar Conta</button></div>
                <div><button onClick={this.handleSignIn}>Entrar</button></div>
                <div><button onClick={this.exposeUser}>Show User</button></div>
                <div><button onClick={this.sendEmailVerification}>Send Verification Email</button></div>
                <div><button onClick={this.userLogOut}>Logging out</button></div>
            </div>
        );
    }
}

export default Auth

