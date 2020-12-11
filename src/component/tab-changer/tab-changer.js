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
		this.pressEnterHandler = this.pressEnterHandler.bind(this);
	}

	handleOnChange(e) {
		this.setState({ text: e.target.value });
	}

	handleOnClick() {
		let selectedItem = this.props.items.filter(
			(item) => this.state.text.toLowerCase() === item.label.toLowerCase()
		);

		if (selectedItem.length) {
			this.props.onChange(selectedItem[0].label);
		} else {
			alert("Please choose a correct index!!!");
		}
	}
	
	pressEnterHandler(e) {
		if (e.charCode === 13) {
			this.handleOnClick();
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
					onKeyPress={this.pressEnterHandler}
				/>
				<button
					className="tab-changer__button"
					onClick={this.handleOnClick}
				>
					Change tab
				</button>
			</div>
		);
	}
}

export default TabChanger;
