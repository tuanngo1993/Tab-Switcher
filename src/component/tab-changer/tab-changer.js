import React from "react";

import "./tab-changer.css";

class TabChanger extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: "",
		};

		this.handleOnClick = this.handleOnClick.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(e) {
		this.setState({text: e.target.value});
	}

	handleOnClick() {
		let selectedItem = this.props.items.find(item => item.index === parseInt(this.state.text, 10))?.label;

		if (selectedItem) {
			this.props.onChange(selectedItem);
		} else {
			alert("Please choose a correct index!!!");
		}
	}

	render() {
		return (
			<div className="tab-changer">
				<input
					className="tab-changer__input"
					placeholder="Enter tab index"
					value={this.state.text}
					onChange={this.handleOnChange}
				/>
				<button className="tab-changer__button" onClick={this.handleOnClick}>
					Change tab
				</button>
			</div>
		);
	}
}

export default TabChanger;
