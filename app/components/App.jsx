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
		this.setState({
			data: 'On Click Events Updated',
		})
	}

   render() {
      return (
         <div>
         	<Form 
         		clickEvent = {this.updateState}
         		myDataProps = {this.state.data}
         	/>
         </div>
      );
   }
}

export default App;