import React, {Component} from 'react';
import './App.css';

export default class Menu extends Component{

    render(){
        return(
            <div className="menu">
		        <div className="menu_header d-flex flex-row align-items-center justify-content-start">
			        <div className="menu_logo"><a href="index.html">Travello</a></div>
			        <div className="menu_close_container ml-auto"><div className="menu_close"></div></div>
		        </div>
            </div>
        );
    }
}