import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import Todoitem from "./components/Todoitem";

class App extends React.Component {
	render() {
		return (
			<div className="container border border-1 border-dark">
				<Todoitem />
				<Todoitem />
				<Todoitem />
			</div>
		);
	}
}

export default App;
