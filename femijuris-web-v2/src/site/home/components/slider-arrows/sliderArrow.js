import React, { Component } from 'react';
import back from "../../../../common/images/baseline-arrow_back_ios-24px.svg";
import forward from "../../../../common/images/baseline-arrow_forward_ios-24px.svg";

class SliderArrow extends Component {

    /*constructor(props) {
        super(props)
    }*/

    render() {

        const arrow = (this.props.back) ? back : forward;

        const style = (this.props.back) ? {
            ...this.props.style,
            display: "block",
            position:"absolute",
            top:"50%",
            cursor:"pointer",
            zIndex: 999999
        }: {
            display: "block",
            position:"absolute",
            top:"50%",
            cursor:"pointer",
            zIndex: 999999,
            right: "-25px"
    };

        return (
            <div
                className={'slick-arrow'}
                style={style}
                onClick={this.props.onClick}>
                    <img src={arrow} alt="arrow_left" />
            </div>
        )
    }
}

export default SliderArrow