import "./app-info.css";

const companyName = "Dinviz"
const AppInfo = () => {
	return (
		<div className="app-info">
			<h1>Облік співробітників у компанії {companyName}</h1>
			<h2>Загальна кількість працівників: 3</h2>
			<h2>Премію отримають: 2</h2>
		</div>
	);
};

export default AppInfo;