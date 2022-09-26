import { useSelector } from 'react-redux';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const list = useSelector((state) => state)
  return (
    <div >
      <TodoList list={list} />
      <TodoForm />
    </div>
  );
}

export default App;
