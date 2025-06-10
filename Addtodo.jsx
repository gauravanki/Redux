import { useRef } from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "./slice";

function AddTodo() {
    const id=useRef("");
    const text=useRef("");
    const dispatch=useDispatch();
    const itemid=id.current.value;
    const itemtext=text.current.value;
 const addHandler=(e)=>{
    e.preventDefault();
    dispatch(addTodo(itemid,itemtext))
 }
  return (<form onSubmit={addHandler}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">ID</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  ref={id} value={id.current.value}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Text</label>
    <input type="text" class="form-control" id="exampleInputPassword1" ref={text} value={text.current.value}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  )
}

export default AddTodo
