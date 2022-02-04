import React from "react";

class Todoitem extends React.Component {
	state = {
		action:'Minum',
		isComplete: false,
	};

	deleteBtnHandler () {
		this.setState({isComplete: false});
		alert("Tombol delete berhasil ditekan")
	}

	completeBtnHandler ()  {
		this.setState({isComplete: true});
		alert(`Selamat anda sudah ${this.state.action}`);
	}

	render() {
		return (
			<div className="d-flex w-50 p-3 justify-content-around">
				{this.state.isComplete ? <p className="lead text-decoration-line-through">{this.state.action}</p> : <p className="lead">{this.state.action}</p>}
				<div>
					<button 
					onClick={()=>{this.deleteBtnHandler()}} 
					className="btn btn-outline-danger me-5"
					>
						Delete
						</button>
					<button 
					onClick={()=>{this.completeBtnHandler()}} 
					className="btn btn-outline-success">
						Complete
						</button>
				</div>
			</div>
		);
	}
}

export default Todoitem;
