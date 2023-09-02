import {observer} from 'mobx-react-lite';
import store from './store';

export const ToDoList = observer(() => {
    const {todos, completeToDo} = store.business;

    if(!todos.length) {
        return <h4>No todos</h4>
    }

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input onChange={() => completeToDo(todo.id)} type='checkbox' checked={todo.completed} />
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
});
