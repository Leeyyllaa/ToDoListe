import { useContext } from "react";
import TodoItem from "./TodoItem";
import { NewContext } from "./NewContext";

export default function TodoList() {
    let {todos} = useContext(NewContext)
    return (
        <ul className="list-reset">
            {todos.map((todo) => (
                <TodoItem key={todo.id}  todo={todo} />
            ))}
        </ul>
    );
}
