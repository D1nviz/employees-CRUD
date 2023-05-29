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
				{ name: "Беата Я.", salary: 5000, increase: true, like: true, id: 0 },
				{ name: "Макз Л.", salary: 4000, increase: false, like: true, id: 1 },
				{ name: "Юлія Ф.", salary: 2000, increase: true, like: true, id: 2 },
				{ name: "Яся Г.", salary: 2000, increase: false, like: true, id: 3 },
				{ name: "Катя П.", salary: 2000, increase: true, like: false, id: 4 },
				{ name: "Ангeліна М.", salary: 2000, increase: false, like: true, id: 5 },
				{ name: "Макс Б.", salary: -100, increase: false, like: false, id: 6 }
			],
			term: "",
			filter: "all"
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
	setFilter = (filter) => {
		this.setState({ filter });
	}
	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => item.name.startsWith(term))
	}
	onUpdateSearch = (term) => {
		this.setState({ term });
	}

	filterData = (data, filter) => {
		if (filter === "bigValue") {
			return data.filter(item => item.salary > 1000)

		}
		else if (filter === "like") {
			return data.filter(item => item.like)
		}
		else {
			return data;
		}
	}

	render() {
		const { data, term, filter } = this.state;
		const employeeCount = this.state.data.length;
		const employeeCountIncrease = data.filter(x => x.increase).length;

		const visibleData = this.filterData(this.searchEmp(data, term), filter);

		return (
			<div className="app">
				<AppInfo employeeCount={employeeCount}
					employeeCountIncrease={employeeCountIncrease} />
				<div className="search-panel">
					<SearchPanel
						onUpdateSearch={this.onUpdateSearch} />
					<AppFilter
						filter={filter}
						setFilter={this.setFilter} />
				</div>

				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp} />
				<EmployeesAddForm
					onAdd={this.addItem} />

			</div>
		)
	}
}

export default App;