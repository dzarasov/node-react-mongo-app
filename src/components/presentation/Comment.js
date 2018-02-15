import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Comment extends Component {
	render() {
		return (
			<div>
				<span>
					Author: <Link to={'/profile/'+this.props.currentComment.username}>
						{this.props.currentComment.username}
					</Link>
				</span><br/>
				<span>Comment: {this.props.currentComment.body}</span><br/>
				<span>Date/Time: {this.props.currentComment.timestamp}</span>
				<hr />
			</div>
		)
	}
}

export default Comment;