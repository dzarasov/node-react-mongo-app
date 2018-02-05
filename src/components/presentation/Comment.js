import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Comment extends Component {
	render() {
		return (
			<div>
				<span>
					<Link to={'/profile/'+this.props.currentComment.username}>
						{this.props.currentComment.username}
					</Link>
				</span>
				<span>{this.props.currentComment.body}</span>
				<span style={{marginLeft: 12, marginRight: 12}}>|</span>
				<span>{this.props.currentComment.timestamp}</span>
				<hr />
			</div>
		)
	}
}

export default Comment;