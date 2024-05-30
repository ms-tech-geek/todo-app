import { useState } from "react";
import ToDoListWithToolbar from "./components/todo/ToDoListWithToolbar";
import { TodosDataProvider } from "./contexts/ToDosDataContext";
import ToDoManager from "./components/todo/ToDoManager";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  // all, pending, completed
  const [displayStatus, setDisplayStatus] = useState("all");
  const [important, setImportant] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <TodosDataProvider>
      <ThemeProvider>
        <Layout>
          <ToDoListWithToolbar
            displayStatus={displayStatus}
            setDisplayStatus={setDisplayStatus}
            import={important}
            setImportant={setImportant}
            searchText={searchText}
            setSearchText={setSearchText}
          >
            <ToDoManager
              displayStatus={displayStatus}
              important={important}
              searchText={searchText}
            />
          </ToDoListWithToolbar>
        </Layout>
      </ThemeProvider>
    </TodosDataProvider>
  );
};
export default App;
