import React, {Component} from 'react';

class CreateComment extends Component {
	constructor() {
		super();
		this.state = {
			comment: {
				username: '',
				body:''
			}
		}
	}

	updateComment(event) {
		let updatedComment = Object.assign({}, this.state.comment);
		updatedComment[event.target.id] = event.target.value;
		this.setState({
			comment: updatedComment
		})
	}

	submitComment() {
		this.props.onCreate(this.state.comment);
		let updatedObject = Object.assign({}, this.state.comment);
		updatedObject.username = '';
		updatedObject.body = '';

		this.setState({
			comment: updatedObject
		})
	}

	render() {
		return (
			<div ref="form">
				<h1>Create Comment</h1>
				<input value={this.state.comment.body} onChange={this.updateComment.bind(this)} id="body" className="form-control" type="text" placeholder="Comment" />
				<button onClick={this.submitComment.bind(this)} className="btn btn-info" >Submit Comment</button>
			</div>
		)
	}
}

export default CreateComment;