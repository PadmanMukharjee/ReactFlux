import AppDispatcher from './AppDispatcher';

class AppActions {

    addTodoItem(data) {
        AppDispatcher.dispatch({
            actionType: 'SUBMIT_TODO',
            value: data
        });      
    }

    removeTodoItem(key)
    {
         AppDispatcher.dispatch({
            actionType: 'REMOVE_TODO',
            value: key
        });
    }
}
export default new AppActions;