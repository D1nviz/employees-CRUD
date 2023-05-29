import { Component } from "react";

import './employees-add-form.scss'

class EmployeesAddForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
			valid: true
		}
	}
	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	onSubmit = (e) => {
		e.preventDefault();
		if (
			!isNaN(this.state.name)
			|| this.state.name.length < 3 
			|| this.state.name.length > 20
			|| this.state.salary <= 0
			|| this.state.salary > 100_000
			) {
			this.setState({
				valid: false
			})
			return;
		}
		this.props.onAdd(this.state.name, this.state.salary)

		this.setState({
			name: '',
			salary: '',
			valid: true
		})

	}

	render() {
		const { name, salary } = this.state;
		const { valid } = this.state;


		let classNames = valid ? " incorrect-form hide" : " incorrect-form";
		let inputBorderColor = valid ? " form-control new-post-label" : " form-control new-post-label input-border-color";

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