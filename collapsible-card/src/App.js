import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div>
				<header>
					<h1>Collapsible Content</h1>
				</header>
				<div className="content">
					<div className="panel-group">
						<div className="panel">
							<div className="panel-heading">
								<h2>Overview</h2>
							</div>
							<div className="panel-collapse">
								<div className="panel-body">
									Anim pariatur cliche reprehenderit, enim eiusmod high life
									accusamus terry richardson ad squid. 3 wolf moon officia aute.
								</div>
							</div>
						</div>
						<div className="panel">
							<div className="panel-heading">
								<h2>Features</h2>
							</div>
							<div className="panel-collapse">
								<div className="panel-body">
									Anim pariatur cliche reprehenderit, enim eiusmod high life
									accusamus terry richardson ad squid. 3 wolf moon officia aute.
								</div>
							</div>
						</div>
						<div className="panel">
							<div className="panel-heading">
								<h2>Reviews</h2>
							</div>
							<div className="panel-collapse">
								<div className="panel-body">
									Anim pariatur cliche reprehenderit, enim eiusmod high life
									accusamus terry richardson ad squid. 3 wolf moon officia aute.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
