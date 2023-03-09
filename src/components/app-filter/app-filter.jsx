import "./app-filter.css"

const AppFilter = ({ setFilter, filter }) => {
  const buttonsData = [
    { name: "all", label: "Всі співробітники" },
    { name: "like", label: "На підвищення" },
    { name: "bigValue", label: "З/П більше 1000$" }
  ]
  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? "btn-light" : "btn btn-outline-light"
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => setFilter(name)}>
        {label}
      </button>
    )
  })
  return (

    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default AppFilter;