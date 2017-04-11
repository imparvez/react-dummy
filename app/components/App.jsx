import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form.jsx';

class App extends React.Component {
	constructor(){
		super();

		this.state = {
			data: 'HELLO',
		}

		this.updateState = this.updateState.bind(this);
	}

	updateState(e){
		console.log(e);
		this.setState({
			data: e.target.value
		});
	}

   render() {
      return (
         <div>
         	<Form 
         		myDataProp={this.state.data} 
         		updateStateProp = {this.updateState} 
         	/>
         </div>
      );
   }
}

export default App;