import './App.css';

import { Header } from './Header';
import { AddToDo } from './AddToDo';
import { ToDoList } from './ToDoList';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ToDoList />
      <AddToDo />
    </div>
  );
};

export default App;
