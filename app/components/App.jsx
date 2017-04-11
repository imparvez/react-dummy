import React from 'react';
import ReactDOM from 'react-dom';

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
            <input type="text" onChange={this.updateState} value={this.state.data}/>
            <h1>{this.state.data}</h1>
         </div>
      );
   }
}

export default App;