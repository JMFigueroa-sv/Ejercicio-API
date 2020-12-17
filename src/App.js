import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const [todos, setTodos] = useState ()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON )
  }
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="App">
        { !todos ? 'Cargando...' : 
        todos.map((todo,index)=>{
        return <div key={index} className="texto">
            <h2 className="text" >{todo.id}</h2>
            <h2 className="text">{todo.title}</h2>
          </div>
          }) }
    </div>
  );
}

export default App;
