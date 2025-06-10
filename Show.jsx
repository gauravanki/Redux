import { removeTodo } from "./slice"
import { useDispatch } from "react-redux"
function Show({todo}) {
     const dispatch = useDispatch();
  return (
<div class="container text-center">
  <div class="row">
    <div class="col-4">{todo.id}</div>
    <div class="col-4">{todo.text}</div>
    <div class="col-2"><button type="button" class="btn btn-danger" onClick={dispatch(removeTodo(todo.id))}>Delete</button></div>
  </div>
</div>
  )
}

export default Show
