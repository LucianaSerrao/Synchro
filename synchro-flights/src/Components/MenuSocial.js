import React, {Component} from 'react';
import './App.css';

export default class MenuSocial extends Component{

    render(){
        return(
            <div className="menu_social">
                <div className="menu_phone ml-auto">Call us: 00-56 445 678 33</div>
                    <ul className="d-flex flex-row align-items-start justify-content-start">
                        <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
		    </div>
        );
    }
}