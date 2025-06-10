import { useSelector } from "react-redux"
import Show from "./Show";
function Listitem() {
    const todos=useSelector((state)=>{
        return(state.todos)
    });
  return (
    <div><ul>
        {todos.map((todo)=>{
            return(<Show key={todo.id} todo={todo}></Show>)
        })}
        </ul>
    </div>
  )
}

export default Listitem
