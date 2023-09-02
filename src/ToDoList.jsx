import {observer} from 'mobx-react-lite';
import Store from './store/BusinessStore';

export const ToDoList = observer(() => {
    const {todos} = Store;

    if(!todos.length) {
        return <h4>No todos</h4>
    }

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input onChange={() => Store.completeToDo(todo.id)} type='checkbox' checked={todo.completed} />
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
});
