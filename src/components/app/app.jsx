import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {

  const data = [
    {name: "Беата Я.", salary: 20_000, increase: true, id: 0},
    {name: "Андрій М.", salary: 1100, increase: false, id: 1},
    {name: "Юлія Ф.", salary: 900, increase: false, id: 2},
    {name: "Макс Б.", salary: 800, increase: false, id: 3},
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data = {data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;