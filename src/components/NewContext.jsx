import { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export let NewContext = createContext();
export function AppDataProvider({ children }) {
    const [todos, setTodos] = useState([
        { id: uuidv4(), name: "Learn React", status: false },
        { id: uuidv4(), name: "Build a Todo App", status: true },
        { id: uuidv4(), name: "Deploy to Netlify", status: false },
    ]);

    function addTodo(event) {
        if (event.key !== "Enter") return;

        const value = event.target.value.trim();
        if (value === "") return;

        const newTodo = {
            id: uuidv4(),
            name: value,
            status: false,
        };

        setTodos((todos) => [...todos, newTodo]);
        event.target.value = "";
    }

    function statusHandler(todoId) {
   
          let updateTode = todos.map(
            (items) => {
                if (items.id === todoId) {
                    items.status = !items.status;
                    return items
                    
                }
                return items;
                }
             )
            setTodos(updateTode);
            }

    
    function removeTodoHandler(todoId) {       
        let removeTodoId = todos.filter(
            (item ) => {
                return item.id !== todoId;
            }
        );

        setTodos(removeTodoId);
    }
   

    function changeHandler(todoId, newName) {
        setTodos(todos.map
            (todo => {
            if (todo.id === todoId) {
                return { ...todo, name: newName };
            }
            return todo;
        }));
    }
    return(
    <NewContext.Provider value= {{todos, addTodo, statusHandler, removeTodoHandler, changeHandler}}>
        
        {children}
    </NewContext.Provider>

    )
}