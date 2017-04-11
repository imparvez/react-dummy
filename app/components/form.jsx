import React from 'react';
import ReactDOM from 'react-dom';

export default class Form extends React.Component{
	render() {
      return (
         <div>
            <button
            	onClick = {this.props.clickEvent}
            >CLICK ME</button>
            <h3>{this.props.myDataProps}</h3>
         </div>
      );
   }
}