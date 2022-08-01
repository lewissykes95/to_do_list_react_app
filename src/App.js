import './App.css';
import {useState} from 'react';

function App() {

// const [toDos, settoDos] = useState(["Go to Gym", "Clean Car", "Buy Shopping"]);

const [toDos, setToDos] = useState([
  {name: "Go to Gym", priority: "low"},
  {name: "Clean Car", priority: "low"},
  {name: "Buy Shopping", priority: "high"}
]);

const [newToDo, setNewToDo] = useState("");

const [newPriority, setNewPriority] = useState("")

const toDoNodes = toDos.map((toDo, index) => {
  return(
    <li key={index}>
      <span>
        Item: {toDo.name} | Priority: {toDo.priority}
      </span>
    </li>
  );

});

const handleNewToDoInput = (event) => {
  setNewToDo(event.target.value);
}

const handlePriority = (event) => {
  setNewPriority(event.target.value);
}



const saveNewToDo = (event) => {
  event.preventDefault();
  const copyToDos = [...toDos]
  copyToDos.push({
    name: newToDo,
    priority: newPriority
  });
  setToDos(copyToDos);
  setNewToDo("");
}


  return (
    <div>
      <h1>To Do List:</h1>
      <hr></hr>

      <form onSubmit={saveNewToDo}>
        <label htmlfor="add-toDo">Add to list:</label>
        <input 
        id="new-todo"
        type="text"
        value={newToDo}
        onChange={handleNewToDoInput}/>
        <input type="submit" value="save to list"/>
        <label>High:</label>
        <input
        name="radios"
        id="high-priority"
        type="radio"
        value="high"
        onChange={handlePriority}/>
        <label>Low:</label>
        <input 
        name="radios"
        id="low-priority"
        type="radio"
        value="low"
        onChange={handlePriority}/>
      </form>

      <ul>
        {toDoNodes}
      </ul>

    </div>
  );
}

export default App;
