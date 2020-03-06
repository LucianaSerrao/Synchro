import React, { Component } from 'react';
import {Col, Row, Container} from "reactstrap";
import {SContainer,TitleContainer,Title, SubTitle, BoldSub, Image, PhotoTitle, PhotoSub} from "./style";
import parcerias from "../../../../common/images/img-parcerias.svg"
import seguranca from "../../../../common/images/img-seguranca.svg"
import trocaExperiencia from "../../../../common/images/img-troca-experiencia.svg"

class About extends Component {

    /*constructor(props) {
        super(props)
    }*/

    render() {
        return (
            <SContainer fluid>
                <Container>
                    <Row>
                        <Col>
                            <TitleContainer>
                                <Title>
                                    Somos uma rede jurídica para mulheres que exercem a advocacia
                                </Title>

                                <SubTitle>
                                    A Comunidade é formada através do engajamento de nossas advogadas inscritas,
                                    que trocam experiências sobre demandas jurídicas, compartilham conhecimento e
                                    fecham contratação de correspondência e parcerias entre si.
                                    Proporcionamos um ambiente <BoldSub> colaborativo </BoldSub> de <BoldSub> sororidade </BoldSub>
                                    e de <BoldSub>empoderamente jurídico</BoldSub>.

                                </SubTitle>
                            </TitleContainer>
                        </Col>
                    </Row>


                </Container>

                <Container>
                    <Row>
                        <Col>
                            <Image src={seguranca}></Image>
                        </Col>

                        <Col>
                            <Image src={trocaExperiencia}></Image>
                        </Col>

                        <Col>
                            <Image src={parcerias}></Image>
                        </Col>

                    </Row>

                    <Row>
                        <PhotoTitle>Segurança</PhotoTitle>
                        <PhotoTitle>Troca de Experiências</PhotoTitle>
                        <PhotoTitle>Parcerias</PhotoTitle>

                    </Row>

                    <Row>
                        <PhotoSub>Obtenha segurança técnica e emocional preparando-se para o mercado.</PhotoSub>
                        <PhotoSub>Troque experiências e tire suas dúvidas com toda a rede.</PhotoSub>
                        <PhotoSub>Faça parcerias e serviços de correspondência dentro da comunidade.</PhotoSub>
                    </Row>


                </Container>
            </SContainer>
        )
    }
}

export default About