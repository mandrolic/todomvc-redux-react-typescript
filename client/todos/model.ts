import { Action } from 'redux';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export interface NewTodoAction extends Action { type: 'ADD_TODO', payload: string  } 
export interface DeleteTodoAction extends Action { type: 'DELETE_TODO', payload: {id: number} };
export interface EditTodoAction extends Action { type: 'EDIT_TODO', payload:  {id: number, text: string} };
export interface CompleteTodoAction extends Action { type: 'COMPLETE_TODO', payload: {id: number} };
export interface CompleteAllTodoAction extends Action { type: 'COMPLETE_ALL' };
export interface ClearCompleteTodoAction extends Action  { type: 'CLEAR_COMPLETED' };

export type TodoAction =
     NewTodoAction
  |  DeleteTodoAction
  |  EditTodoAction
  |  CompleteTodoAction
  |  CompleteAllTodoAction
  |  ClearCompleteTodoAction


export type IState = Todo[];
