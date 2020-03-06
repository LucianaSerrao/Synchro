import React, { Component } from 'react';
import mainLogoImg from "../../../../common/images/logo-dark.svg";

class MainLogo extends Component {

   /* constructor(props) {
        super(props)
    }*/

    render() {
        return (
            <div>
                <img src={mainLogoImg} alt = "" />
            </div>
        )
    }
}

export default MainLogo