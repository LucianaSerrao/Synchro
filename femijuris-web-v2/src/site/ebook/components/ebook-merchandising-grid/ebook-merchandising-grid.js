import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class EbookMerchandisingGrid extends Component {

    render() {

        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <Container fluid>
                <Slider {...settings}>
                    {this.props.items.map((it,i) => (
                        <div key={i}>
                            <h3>{it.title}</h3>
                        </div>
                    ))}
                </Slider>
            </Container>
        );
    }
}

export default EbookMerchandisingGrid;