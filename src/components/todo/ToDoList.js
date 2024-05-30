import ToDo from "./ToDo";

const filterByStatus = ({ todo, displayStatus }) => {
  const statusFilters = {
    all: () => true,
    pending: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  };

  return statusFilters[displayStatus]
    ? statusFilters[displayStatus](todo)
    : false;
};

const filterByImportance = ({ todo, important }) => {
  return !important || todo.important;
};

const filterByText = ({ todo, searchText }) => {
  return searchText?.length > 0
    ? todo.todoText
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    : true;
};

const ToDoList = ({
  displayStatus,
  toDoList,
  important,
  searchText,
  handleToggle,
  handleDelete,
  handleEdit,
  idUpdating,
}) => {
  return (
    <div className="tasks">
      {toDoList
        .filter((todo) => filterByStatus({ todo, displayStatus }))
        .filter((todo) => filterByImportance({ todo, important }))
        .filter((todo) => filterByText({ todo, searchText }))
        .map((todo) => {
          return (
            <ToDo
              key={todo.id}
              todoItem={todo}
              handleToggleCompleted={handleToggle}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              idUpdating={idUpdating}
            />
          );
        })}
    </div>
  );
};

export default ToDoList;
