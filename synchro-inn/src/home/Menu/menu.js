import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
    Nav,
    Collapse,
    NavbarBrand,
    NavbarToggler,
    NavItem, NavLink,
    Container
} from "reactstrap";
import {WrapNav} from './style'
import MainLogo from "../MainLogo/mainLogo"

class Menu extends Component {
    
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this);
        this.redirectTo = this.redirectTo.bind(this);

        this.state = {isOpen: false};
        
    }

    redirectTo(path){
        window.location.replace(path)
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
       let notLoggedIn = (
            <NavItem className='nav-item-sign-in'>
                <NavLink onClick={() => this.props.goTo('/login')}>Entrar</NavLink>
            </NavItem>
        );

        let loggedIn = (
            <NavItem className='nav-item-sign-in'>
                <NavLink onClick={() => this.props.logout()}>Sair</NavLink>
            </NavItem>
        );

        return (
            <WrapNav className={'main-menu'} expand="md" fixed="top">
                <Container>
                    <NavbarBrand href="/">
                        <MainLogo/>
                    </NavbarBrand>
                </Container>
            </WrapNav>
        )
    }
}

export default Menu