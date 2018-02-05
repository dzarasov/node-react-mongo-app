import React, { Component } from 'react';
import styles from './styles';

class Zone extends Component {
	onSelectTitle(event) {
		event.preventDefault();
		this.props.select(this.props.index);
	}

	render() {
		const title = (this.props.isSelected) ? <a style={style.title} href="#">{this.props.currentZone.name}</a> : <a href="#">{this.props.currentZone.name}</a>
		const zipCode = this.props.currentZone.zipCodes.map(zip => {
			return zip + ' ';
		})

		return (
			<div style={style.container}>
				<h2 onClick={this.onSelectTitle.bind(this)} style={style.header}>
					{title}
				</h2>
				<span className="detail">{zipCode}</span><br />
				<span>{this.props.currentZone.comments} comments</span>
			</div>
		)
	}
}
const style = styles.zone;


export default Zone
