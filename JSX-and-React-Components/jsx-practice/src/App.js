import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
	componentDidMount() {}

	LikeFunctions() {
		console.log('yay functions');
	}

	render() {
		const array = ['here', 'we', 'go'];

		let no = 'yes';
		const display = 'My Name';

		return (
			<div>
				<p>{display}</p>
				<hr />
				<input type="text" onChange={this.LikeFunctions} />
				<table>
					<tbody>
						{array.map((term, index) => {
							no = 'no';
							return (
								<tr key={index}>
									<td>{term}</td>
									<td>{no}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
