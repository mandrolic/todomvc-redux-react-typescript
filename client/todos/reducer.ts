import { Reducer } from 'redux';
import { TodoAction, IState } from './model';

const initialState = [{
  text: 'Use Redux with TypeScript',
  completed: false,
  id: 0
}];

let todoReducer : Reducer<IState> = (state : IState | undefined, action : TodoAction)  => { 
  
  // Redux will call once initially with undefined state when reducer is combined() with others
  if (state == undefined) { 
    return initialState;
  }

  switch (action.type) {

    case 'ADD_TODO':
      const newId = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      return [ { text: action.payload,  id: newId, completed: false },  ...state];
  
    case 'DELETE_TODO':
      const todoToDelete = action.payload;
      return state.filter(todo =>  todo.id !== todoToDelete.id);
    
    case 'EDIT_TODO':
      const todoToEdit = action.payload;
      return state.map(todo => todo.id === todoToEdit.id ? { ...todo, text: todoToEdit.text } : todo);
    
    case 'COMPLETE_TODO':
      const todoToComplete = action.payload;
      return state.map(todo => todo.id === todoToComplete.id ? { ...todo, completed: !todo.completed} : todo);

    case 'COMPLETE_ALL':
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({ ...todo, completed: !areAllMarked }));
    
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);
    }

}  

export default todoReducer;