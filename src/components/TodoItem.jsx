import EditTodoIcon from "./EditTodoIcon";
import DeleteTodoIcon from "./DeleteTodoIcon";
import { useContext, useState } from "react";
import { NewContext } from "./NewContext";

export default function TodoItem({todo}) {
    let {changeHandler,statusHandler} = useContext(NewContext)
    
    let [editmode, setEditmode] = useState (false);
    function closeInput(event) {
        if (event.key === "Enter") {
            changeHandler(todo.id, event.target.value);
            setEditmode(false);
        }  
    }
      
    
    
return (
        <li className="relative flex items-center justify-between px-2 py-6 border-b">
            
            {
                editmode 
                ? <input onKeyDown={() => closeInput(event)} defaultValue={todo.name} type="text" className="w-full px-2 py-3 border rounded outline-none border-grey-600" /> 
                :(
                    <div>
                       <div> 
                            <input type="checkbox" checked={todo.status} onChange={() => {statusHandler(todo.id)}} />
                            <p
                            className={`inline-block mt-1 ml-2 text-gray-600 ${
                                todo.status ? "line-through" : ""
                            }`}
                            >
                            {todo.name}
                            </p>
                        </div>

                        <button
                        type="button" className="absolute right-0 flex items-center space-x-1"
                        >
                            <EditTodoIcon setEditmode={setEditmode} todo={todo} />
                            <DeleteTodoIcon  todo={todo} />
                        </button> 
                    </div>
                 )
            }
        </li>
    );
}
