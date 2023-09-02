import {makeAutoObservable, reaction, toJS} from 'mobx';

class store {
  todos = [];
  name = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    reaction(() => this.todos.length, () => {
        console.log('send todos to server', toJS( this.todos ));
    })
  }

  get countOfCompleted() {
    return this.todos.filter( todo => todo.completed ).length;
  }

  completeToDo(id) {
    const todo = this.todos.find( item => item.id === id )
    todo.completed = true;
  }

  addToDo(task) {
    this.todos.push({
        title: task,
        completed: false,
        id: Date.now(),
    })
  }
}

const todoStore = new store();

export default todoStore;
