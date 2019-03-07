import React from 'react';

class NotMatched extends React.Component {
	render() {
		return (
			<div>
				<h1>Not matched</h1>
				<p>
					There is no pokemon <strong>{this.props.location.state.referrer}</strong>
				</p>
			</div>
		)
	}
};

export default NotMatched;