import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: ''
		}
	}
	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAdd(this.state.name, this.state.salary)
		this.setState({
			name: '',
			salary: ''
		})
	}

	render() {
		const { name, salary } = this.state;
		const {notValidForm} = this.props;
		
		
		let classNames = notValidForm ? " incorrect-form" :" incorrect-form hide";
		let inputBorderColor = notValidForm ? " form-control new-post-label input-border-color" :" form-control new-post-label";

		return (
			<div className="app-add-form">
				<h3>Додайте нового співробітника</h3>
				<form
					onSubmit={this.onSubmit}
					className="add-form d-flex">
					<input type="text"
						className={inputBorderColor}
						placeholder="Як його звати?"
						name="name"
						value={name}
						onChange={this.onValueChange} />
					<input type="number"
						className={inputBorderColor}
						placeholder="З/П в $?"
						name="salary"
						value={salary}
						onChange={this.onValueChange} />

					<button type="submit"
						className="btn btn-outline-light">Додати</button>
				</form>
				<p className={classNames}>Неправильні дані</p>
			</div>
		)
	}
};

export default EmployeesAddForm;