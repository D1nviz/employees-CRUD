import "./app-info.css";

const companyName = "Dinviz";
const AppInfo = ({ employeeCount, employeeCountIncrease }) => {
	return (
		<div className="app-info">
			<h1>Облік співробітників у компанії "{companyName}"</h1>
			<h2>Загальна кількість працівників: {employeeCount}</h2>
			<h2>Премію отримають: {employeeCountIncrease}</h2>
		</div>
	);
};

export default AppInfo;