import React, { Component } from 'react';
import {
    Nav,
    Collapse,
    NavbarBrand,
    NavbarToggler,
    NavItem, NavLink,
    Container
} from "reactstrap";
import {WrapNav} from './style'
import MainLogo from "../mainlogo/MainLogo";


class Menu extends Component {

    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this);
        this.redirectTo = this.redirectTo.bind(this);

        this.state = {
            isOpen: false
        };
    }

    redirectTo(path) {
        window.location.replace(path)
    }

    toggle() {
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
                        <MainLogo />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto main-menu-nav" navbar>
                            <NavItem>
                                <NavLink href="https://femijuris.com.br/diretorio">Advogadas</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://femijuris.com.br/diretorio">PODCAST FEMIJURIS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="" onClick={ () => this.goTo('/blog') }>Informações Jurídicas</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Quem Somos</NavLink>
                            </NavItem>
                            { !this.props.loggedIn ? notLoggedIn : loggedIn}
                        </Nav>
                    </Collapse>
                    </Container>
                </WrapNav>
        )
    }
}

export default Menu