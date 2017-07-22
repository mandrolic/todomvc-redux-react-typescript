import  { 
  Todo,
  NewTodoAction, 
  DeleteTodoAction, 
  EditTodoAction, 
  CompleteTodoAction, 
  CompleteAllTodoAction, 
  ClearCompleteTodoAction }  
from './model';

const addTodo : ((t: string) => NewTodoAction) = (text: string) => {
  return { type: "ADD_TODO", payload: text};
} 

const deleteTodo : ((t: Todo) => DeleteTodoAction) = (todo: Todo) => {
  return { type: "DELETE_TODO", payload: todo };
}

const editTodo : ((t: Todo, s: string) => EditTodoAction) = (todo: Todo, newText: string) => {
  return { type: "EDIT_TODO", payload: {...todo, text : newText }};
}

const completeTodo : ((t: Todo) => CompleteTodoAction) = (todo: Todo) => {
  return { type: "COMPLETE_TODO", payload: todo };
}

const completeAll : () => CompleteAllTodoAction = () => {
  return { type: "COMPLETE_ALL" };
}

const clearCompleted : () => ClearCompleteTodoAction = () => {
  return { type: "CLEAR_COMPLETED" };
}

export {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted
}
