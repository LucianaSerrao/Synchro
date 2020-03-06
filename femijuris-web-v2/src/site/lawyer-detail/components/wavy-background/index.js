import React, { Component } from 'react';
import { WavyDiv } from './style';

class WavyBackgroud extends Component {
    render() {
        return (
            <WavyDiv>
                <svg viewBox='0 0 500 150' preserveAspectRatio='none' style={{ height:
                100+'%', width: 100+'%' }}>
                    <path d='M-72.88,103.13 C149.99,150.00 245.63,24.17 504.36,124.83 L500.00,0.00 L0.00,0.00 Z'
                    fill='#dfcbc4' />
                </svg>
            </WavyDiv>
        );
    }
}

export default WavyBackgroud;
