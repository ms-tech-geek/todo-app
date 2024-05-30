import ToDo from "./ToDo";

const filterByStatus = ({ todo, displayStatus }) => {
  if (displayStatus === "all") {
    return true;
  } else if (displayStatus === "pending") {
    return todo.completed === false;
  } else if (displayStatus === "completed") {
    return todo.completed === true;
  } else {
    return false;
  }
};

const filterByImportance = ({ todo, important }) => {
  if (important === true) {
    return todo.important === true;
  } else {
    return true;
  }
};

const filterByText = ({ todo, searchText }) => {
  if (searchText?.length > 0) {
    return todo.todoText
      .toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase());
  } else {
    return true;
  }
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
