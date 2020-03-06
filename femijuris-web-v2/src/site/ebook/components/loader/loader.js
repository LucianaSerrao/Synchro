import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'

class Loader extends Component {

    render() {
        return (
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-center"><CircularProgress  thickness={1} size={150}/></div>
            </div>
        )
    }
}

export default Loader