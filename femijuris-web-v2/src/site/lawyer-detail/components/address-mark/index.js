import React, { Component } from 'react';
import { AddressBox, CircularMark } from "./style";

class AddressMark extends Component {

    render() {
        return (
        <div>
            <AddressBox>
                <label>Escritório:</label>
                <p>{this.props.text}</p>
            </AddressBox>
            <CircularMark/>
        </div>
    );
    }
}

export default AddressMark;