import {observer} from 'mobx-react-lite';

import Store from './store/BusinessStore';

export const Header = observer(() => {
    return (
        <h1>Completed: {Store.countOfCompleted}</h1>
    );
});