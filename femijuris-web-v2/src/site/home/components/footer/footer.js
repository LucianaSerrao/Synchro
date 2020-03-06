import React, { Component } from 'react';
import { SContainer, Image, Social, Titles, Subtitles, Other, Search, Button, RowWithMargin, ColWithMargin } from './style.js'
import {Col, Container} from "reactstrap";
import logowhite from "../../../../common/images/logo-white.svg";
import facebook from "../../../../common/images/icon/ic-social-facebook.svg";
import instagram from "../../../../common/images/icon/ic-social-instagram.svg";
import linkedin from "../../../../common/images/icon/ic-social-linkedin.svg";


class Footer extends Component {

    render() {

        return (
            <SContainer fluid>
                <Container>
                    <RowWithMargin rowMarginBottom = "20px">

                        <Col md="6" lg="5" sm="12" xs="12" className="text-center text-md-left mb-4 mb-md-0">
                            <Image src={logowhite}></Image>

                        </Col>

                        <Col md="6" lg="7" sm="12" xs="12" className="text-center text-md-right">
                            <a href="https://www.facebook.com/femijuris/" ><Social inputLeftPadding="0px" src={facebook}></Social></a>
                            <a href="https://www.linkedin.com/company/femijuris/"><Social src={linkedin}></Social></a>
                            <a href="https://www.instagram.com/femijuris/?hl=pt"><Social src={instagram}></Social></a>

                        </Col>
                    </RowWithMargin>



                    <RowWithMargin>
                        <ColWithMargin md="6" lg="2" sm="4" xs="6">

                            <Titles>FEMIJURIS</Titles>
                            <a href="http://localhost:3003/diretorio"><Subtitles>Diretório</Subtitles></a>
                            <a href="http://localhost:3003/blog"><Subtitles>Blog</Subtitles></a>
                            <a><Subtitles>FAQ Jurídico</Subtitles></a>
                            <a><Subtitles>Parceiros</Subtitles></a>
                            <a><Subtitles>Quem Somos</Subtitles></a>

                        </ColWithMargin>

                        <ColWithMargin md="6" lg="3" sm="4" xs="6">
                            <Titles>INFORMAÇÕES</Titles>
                            <a><Subtitles>Assinante</Subtitles></a>
                            <a><Subtitles>Parcerias</Subtitles></a>
                            <a><Subtitles>Termos de Uso</Subtitles></a>
                            <a href = "mailto: contatofemijuris@gmail.com"><Subtitles>Contato</Subtitles></a>

                        </ColWithMargin>

                        <ColWithMargin md="12" lg="7" sm="4" xs="12">
                            <RowWithMargin><Titles>NEWSLETTER</Titles></RowWithMargin>

                            <RowWithMargin><Other>Inscreva-se para receber 1 email por semana com muito conteúdo bacana!</Other></RowWithMargin>

                            <RowWithMargin sm="4" xs="12">
                                <Search placeholder = "Email*"></Search>
                                <Button>Assinar</Button>

                            </RowWithMargin>


                        </ColWithMargin>

                    </RowWithMargin>
                </Container>
            </SContainer>
        )
    }
}

export default Footer