import './App.css';
import { useState,useRef } from 'react';
function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handleClick = () => {
      const text = inputRef.current.value;
      const newItem = {done:false , text}
      //spread operator
      setTodos([...todos,newItem]);
      //Make it empty after adding the task
      inputRef.current.value = '';
  };
  const handleItemDone = (index) => {
    //get copy of the array
    const newTodos = [...todos];
    //update the done property of the item
    newTodos[index].done = !newTodos[index].done;
    //update the state
    setTodos(newTodos);
  
  };
  const handelDelete = (index) => {
    //get copy of the array
    const newTodos = [...todos];
    //remove the item from the array
    newTodos.splice(index,1);
    //update the state
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className='to-do'>
      <ul>
       {
        todos.map(({text,done},index)=>{
          return <div className='item'>
            
            <li className= {done ? "done": ""} key={index} onClick={ () => handleItemDone(index)}>{text}</li>
          <span onClick={()=> handelDelete(index)}>❌</span>
          
          </div>
        })


       }
      </ul>
      <input ref={inputRef} placeholder='Enter Your Task.....'/>
      <button onClick={handleClick}>Add</button>
      
      </div>
      
    </div>
  );
}

export default App;
