import {observer} from 'mobx-react-lite';
import store from './store';
import { useState } from 'react';

export const AddToDo = observer(() => {
    const [data, setData] = useState('');
    const {addToDo} = store.business;

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(data);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type={'text'} onChange={(e) => setData(e.target.value)} value={data} />
                <button type={'submit'}>Add ToDo</button>
            </form>
        </div>
    )
})