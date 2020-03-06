import React, { Component } from 'react';
import mainSynchroLogo from "../../common/images/logo.png";


class MainLogo extends Component {

    /* constructor(props) {
         super(props)
     }*/
 
     render() {
         return (
             <div>
                 <img src={mainSynchroLogo} alt = "" />
             </div>
         )
     }
 }
 
 export default MainLogo