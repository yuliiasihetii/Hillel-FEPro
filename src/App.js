import { useSelector } from "react-redux";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import Loading from "./components/Loading";
import './style/style.css'

function App() {
  const { isLoading } = useSelector(state => state.isLoading)
  return (
    <div className="container">
      {
        isLoading ? <Loading /> : <ToDoList />
      }
      <ToDoForm />
    </div>
  );
}

export default App;
