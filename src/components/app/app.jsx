import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "Беата Я.", salary: 20_000, increase: true, rise: true, id: 0 },
				{ name: "Андрій М.", salary: 1100, increase: false, rise: false, id: 1 },
				{ name: "Юлія Ф.", salary: 900, increase: false, rise: false, id: 2 },
				{ name: "Макс Б.", salary: 800, increase: false, rise: false, id: 3 },

			],
			notValidForm: false
		}
		this.maxId = this.state.data.length;
		
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}
	addItem = (name, salary) => {
		if(name.length > 3 && salary >= 100) {
			const newItem = {
				name,
				salary,
				increase: false,
				rise: false,
				id: this.maxId++
				
			}

			this.setState({
				notValidForm: false
			})
	
			this.setState(({ data }) => {
				return {
					data: [...data, newItem]
				}
	
			})
		} else {
			this.setState({
				notValidForm: true 
			})
			
		}
	}

	onToggleIncrease = (id) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				return item.id === id ? { ...item, increase: !item.increase } : item
			})
		}))

	}

	onToggleLike = (id) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				return item.id === id ? { ...item, like: !item.like } : item
			})
		}))
	}

	render() {
		const { data } = this.state;
		const employeeCount = this.maxId;
		const employeeCountIncrease = data.filter(x => x.increase);

		
		return (
			<div className="app">
				<AppInfo employeeCount={employeeCount}
					employeeCountIncrease={employeeCountIncrease} />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployeesList
					data={data}
					onDelete={this.deleteItem}
					onToggleIncrease={this.onToggleIncrease}
					onToggleLike={this.onToggleLike} />
					<EmployeesAddForm 
						onAdd={this.addItem}
						notValidForm = {this.state.notValidForm}/>
				
			</div>
		);
	}

}

export default App;