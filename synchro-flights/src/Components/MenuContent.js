import React, {Component} from 'react';
import './App.css';

export default class MenuContent extends Component{

    render(){
        return(
            <div className="menu_content">
			    <ul>
                    <li><a href="inex.html">Home</a></li>
                    <li><a href="about.html">About us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="news.html">News</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
		    </div>
        );
    }
}