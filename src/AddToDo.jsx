import {observer} from 'mobx-react-lite';
import Store from './store/BusinessStore';
import { useState } from 'react';

export const AddToDo = observer(() => {
    const [data, setData] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        Store.addToDo(data);
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