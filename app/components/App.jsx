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
			data: 'On Click Event Updated',
		})
	}

   render() {
      return (
         <div>
         	<button onClick={this.updateState}>Click Me</button>
         	<h1>{this.state.data}</h1>
         </div>
      );
   }
}

export default App;