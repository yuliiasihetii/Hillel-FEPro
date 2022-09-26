import { useSelector } from "react-redux"
import todoListSelector from "./store/selector/todoSelector"
import TodoListItem from "./TodoListItem"

export default function TodoList() {
    const list = useSelector(todoListSelector);
    return (<div>
        {list.map((item) => <TodoListItem key={item.id} item={item} />)}
    </div>)
}