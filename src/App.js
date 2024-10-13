import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App(){
  const [todo, setTodo] = useState("")
  const [name, setNameInput] = useState("")
  const [email, setEmailInput] = useState("")

  const todos = useSelector((state) => state.todos.todos);
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();

  //handle adding a new todo
  const addTodo = () => {
    if(todo.trim()){
      dispatch({type : "ADD_TODO", payload : todo});
      setTodo("");
    }
  };

  //remove a todo
  const removeTodo = (index) => {
    dispatch({type : "REMOVE_TODO", payload:index})
  };
  
  //handle updating name
  const updateName =() => {
    if(name.trim()){
      dispatch({type : "SET_NAME", payload : name })
    }
  };

  //handle updating email
  const updateEmail =() => {
    if(email.trim()){
      dispatch({type : "SET_EMAIL", payload : email })
    }
  };

  return (
    <div classname="App">
      <h1> Todo List</h1>
      <input 
        type="text"
        value ={todo}
        onChange = { (e) => setTodo(e.target.value)}
        placeholder = "Add a todo"
      />
      <button onClick = {addTodo}> Add Todo </button>
      <ul>
        {todos.map((todo,index)=>(
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}> Remove Todo</button>
          </li>
        ))}
      </ul>

      <h1> User Profile </h1>
      <p>Name : {user.name}</p>
      <p>EMail : {user.email}</p>

      <input 
         type="text"
         value = {name}
         onChange = {(e)=> setNameInput(e.target.value)}
         placeholder = "Update Name"
      />
      <button onClick={updateName}>Update Name </button>   

      <input 
         type="email"
         value = {email}
         onChange = {(e)=> setEmailInput(e.target.value)}
         placeholder = "Update Email"
      />
      <button onClick={updateEmail}>Update Email </button> 
    </div>
  );

}

export default App;
