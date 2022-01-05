
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:4000/getTodos").then((res) => {
      setData(res.data);
   
    })}, []);
  const [newTodo, setNewTodo] = useState('');
  const addtodo = () => {
    axios.post("http://localhost:4000/addTodo", {
      desc: newTodo,
    })
    .then(() => {
      alert("Todo Added");
    });
  }



  return (
    <div className='container'>
      <h1 className='title'>todo app</h1>
      <div className="add">
        <h2>add todo</h2>
        <input type="text" placeholder='enter new task' onChange={
          (e) => { setNewTodo(e.target.value) }} />
        <button onClick={addtodo}>add task</button>
      </div>
      
      
      {data.map((item) => {
        return (
          <div key={item._id
          } className='taskbox'>
            <h2>Task : {item.task}</h2>

          </div>
        )
       }
   
      )}
    </div>
  );
}


export default App;