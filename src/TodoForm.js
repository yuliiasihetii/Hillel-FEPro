import { useDispatch } from "react-redux"
import { createTodo } from "./store/actions/todoActions"

export default function TodoForm() {
    const dispatch = useDispatch()
    function onSubmitForm(e) {
        e.preventDefault()
        const newTodo = {
            tittle: e.target.elements.newTodo.value
        }
        dispatch(createTodo(newTodo));
    }

    return (<form onSubmit={onSubmitForm}>
        <input name="newTodo" type="text" ></input>
        <button type="submit" >ADD</button>
    </form>)
}