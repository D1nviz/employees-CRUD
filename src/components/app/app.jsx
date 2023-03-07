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
				{ name: "Беата Я.", salary: 20_000, increase: true, like: true, id: 0 },
				{ name: "Андрій М.", salary: 1100, increase: false, like: false, id: 1 },
				{ name: "Юлія Ф.", salary: 900, increase: false, like: false, id: 2 },
				{ name: "Макс Б.", salary: 800, increase: false, like: false, id: 3 },

			],
			term: ""
		}
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}
	addItem = (name, salary) => {
			this.setState(({ data }) => {
				return {
					data: [
						...data,
						{
							name,
							salary,
							increase: false,
							like: false,
							id: this.state.data.length + 1
						}]
				}
			})
		
		
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				return item.id === id ? { ...item, [prop]: !item[prop] } : item
			})
		}))

	}

	searchEmp = (items, term) => {
		if(term.length === 0) {
			return items;
		} 
		return items.filter(item => item.name.startsWith(term))
	}
	onUpdateSearch = (term) => {
		this.setState({term});
	}



	render() {
		const { data, term } = this.state;
		const employeeCount = this.state.data.length;
		const employeeCountIncrease = data.filter(x => x.increase).length;
		const visibleData = this.searchEmp(data, term);

		return (
			<div className="app">
				<AppInfo employeeCount={employeeCount}
					employeeCountIncrease={employeeCountIncrease} />
				<div className="search-panel">
					<SearchPanel 
						onUpdateSearch = {this.onUpdateSearch}/>
					<AppFilter />
				</div>

				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp} />
				<EmployeesAddForm
					onAdd={this.addItem}/>

			</div>
		)
	}
}

export default App;