
import { ADD_TODO, REMOVE_TODO, NEW_TODO, COMPLETE_TODO } from "../types";

const initialState = {
  todos: ["Make Memes"],
  newTodo: "",
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload], newTodo: "" };
    case NEW_TODO:
      return { ...state, newTodo: action.payload };
    case REMOVE_TODO:{
      return Object.assign({}, state, {
        items: [...state.items.filter(item => item.id !== action.id)],
      });
    }
    case COMPLETE_TODO:
      return{ ...state, newTodo: [...state.todos, action.payload], newTodo: "complete" }
    default:
      return { ...state };
  }
};

export default TodoReducer;
