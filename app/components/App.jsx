import React from 'react';

class App extends React.Component {
	constructor(){
		super();

		this.state = {
			data: [],
		}

		this.setStateHandler = this.setStateHandler.bind(this);
	}

	setStateHandler(){
		var item = "State....";
		var myArr = this.state.data;
		myArr.push(item);
		this.setState({
			data: myArr
		})
	}

   render() {
      return (
         <div>
            <button onClick={this.setStateHandler}>SET STATE</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}

export default App;