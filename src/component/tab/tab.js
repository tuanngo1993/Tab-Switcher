import React from "react";

import "./tab.css";

class Tab extends React.Component {
	constructor(props) {
		super(props);

		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick(item) {
		this.props.onChange(item.target.innerHTML);
	}

	render() {
		return (
			<div className="tab">
				<ul className="tab__nav-container">
					{this.props.items.map((item) => {
						return (
							<li
								key={`nav-${item.label}`}
								className={
									item.label === this.props.selected
										? "tab__nav-item tab__nav-item--selected"
										: "tab__nav-item"
								}
								onClick={this.handleOnClick}
							>
								{item.label}
							</li>
						);
					})}
				</ul>
				<div className="tab__content">
					{
						this.props.items.find((item) => item.label === this.props.selected)
							?.content
					}
				</div>
			</div>
		);
	}
}

export default Tab;
