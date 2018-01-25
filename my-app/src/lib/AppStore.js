
import AppDispatcher from './AppDispatcher';
import { EventEmitter } from 'events';

let todoItems = [];

class AppStore extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this))
    }

    emitChange(eventName) {
        this.emit(eventName);
    }

    getAll() {
        return todoItems;
    }
  

    submitTodo(item) {
        todoItems.push(item);
    }

    removeTodo(key) {
        todoItems.splice(key, 1);       
    }

   

    addChangeListener(eventName, callback) {
        this.on(eventName, callback);
    }

    removeChangeListener(eventName, callback) {
        this.removeListener(eventName, callback);
    }

    dispatcherCallback(action) {
        switch (action.actionType) {
            case 'SUBMIT_TODO':
                this.submitTodo(action.value);
                break;           
            case 'REMOVE_TODO':
                this.removeTodo(action.value);
        }

        this.emitChange('STORE_' + action.actionType);

        return true;
    }
}

export default new AppStore();

