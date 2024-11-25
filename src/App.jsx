import CreateTodoModal from "./components/CreateTodoModal";
import Layouts from "./components/Layouts";
import Todos from "./components/Todos";
import "./config/connection";

function App() {
  return (
    <Layouts>
      <CreateTodoModal />
      <Todos />
    </Layouts>
  );
}

export default App;
