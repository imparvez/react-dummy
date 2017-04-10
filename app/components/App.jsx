import React from 'react';
import Header from './header.jsx';
import TableRow from './tablerow.jsx';

export default class App extends React.Component {
	constructor(){
		super();

		this.state = {
			data: [
				{
					'id': 1,
					'name': 'Foo',
					'age': 30
				}, {
					'id': 2,
					'name': 'Bar',
					'age':15
				}, {
					'id': 3,
					'name': 'Baz',
					'age': 40
				}
			]
		}
	}



	render(){
		var i = 1;
		var myH1Style = {
			fontSize: 100,
			color: '#c33'
		}
		return(
			<div>
	            <h1 style={myH1Style}>Header</h1>
	            <h2>Content</h2>
	            <p data-customAttr="someValue">This is the content!!!</p>
	            <p>2 + 2 is {2+2}</p>
	        	{/*HELLO*/}
	            <h3>{ i = 1 ? 'true': 'false'}</h3>
	            <Header />
	            <table>
	            	<tbody>
	            		{this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
	            	</tbody>
	            </table>
	         </div>
		)
	}
}