import React from "react";

import "./App.css";

import TabChanger from "./component/tab-changer/tab-changer";
import Tab from "./component/tab/tab";

const items = [
	{ index: 1, label: "Positive", content: "Positive content" },
	{ index: 2, label: "Negative", content: "Negative content" },
	{ index: 3, label: "Neutral", content: "Neutral content" },
];

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: "Positive",
		};

		this.handleChangeTab = this.handleChangeTab.bind(this);
	}

	handleChangeTab(item) {
		if (item !== this.state.selected) {
			this.setState({ selected: item });
		}
	}

	render() {
		return (
			<div className="App">
				<TabChanger items={items} onChange={this.handleChangeTab} />
				<Tab
					selected={this.state.selected}
					items={items}
					onChange={this.handleChangeTab}
				/>
			</div>
		);
	}
}

export default App;
