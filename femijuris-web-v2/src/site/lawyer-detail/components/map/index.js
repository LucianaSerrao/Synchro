import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyle.json';
import AddressMark from '../address-mark';

function createMapOptions(maps) {
    return {
        styles: mapStyles,
        mapTypeControl: false,
    }
};

class Map extends Component {

    /*constructor(props) {
        super(props);
    }*/

    render(){
        return(
            <div>
                <GoogleMapReact 
                style={{height: 270+'px'}}
                bootstrapURLKeys={{ 
                    key: ''
                  , language: 'pt-BR'}}
                options={createMapOptions}
                defaultZoom={16}
                resetBoundsOnResize={true}
                center={{ lat: this.props.latLng.lat, lng: this.props.latLng.lng }}
                >
                <AddressMark lat={ this.props.latLng.lat} lng={this.props.latLng.lng } text={this.props.name}/>
                {/* TODO testar centralização<label lat={ this.props.latLng.lat} lng={this.props.latLng.lng }>Aqui</label> */}
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;