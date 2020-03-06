import React, { Component } from 'react';
import Menu from "../menu/menu";
import {SContainer} from "./style";
import {Col, Row, Container} from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrimaryTeaser from "../primary-teaser/primaryteaser";
import SliderArrow from "../slider-arrows/sliderArrow";


class Header extends Component {

   /* constructor(props) {
        super(props)
    }*/

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <SliderArrow back/>,
            nextArrow: <SliderArrow/>,
            dotsClass: "slick-dots slick-femijuris"
        };

        // TODO
        // ebooks is undefined at the zero moment
        // show slider only if we have the item ?


        return (
            <SContainer fluid>
                <Container>
                    <Row>
                        <Col>
                            <Menu
                                goTo={this.props.goTo}
                                logout={this.props.logout}
                                loggedIn={this.props.loggedIn} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Slider {...settings}>
                                <div>
                                    <PrimaryTeaser />
                                </div>

                                <div>
                                    <PrimaryTeaser />
                                </div>

                                {/*<div>*/}
                                    {/*<EbookSliderTeaser book={this.props.ebooks.find(it => it.uri === 'trabalhista-vol-1')} />*/}
                                {/*</div>*/}
                            </Slider>
                        </Col>
                    </Row>


                </Container>
            </SContainer>
        )
    }
}

export default Header