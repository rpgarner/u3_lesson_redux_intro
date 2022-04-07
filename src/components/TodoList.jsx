import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import {
  AddTodo,
  RemoveTodo,
  CreateNewTodo, MarkComplete
  
} from "../store/actions/TodoActions";

const TodoList = (props) => {
  console.log(props, "these are your todolist props");

  const handleChange = (event) => {
    props.createTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo(props.todoState.newTodo);
  };

  const handleDelete = (index) => {
    props.removeTodo(props.todoState.todos.index);
    
  };
//   const handleComplete = (index) => {
//       event.preventDefault();
//       props.markComplete(props.todoState.newTodo);
//   }

  return (
    <div>
      <TodoForm
        newTodo={props.todoState.newTodo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {props.todoState.todos.map((todo, index) => (
        <div key={index}>
        <li key={index}>{todo}</li>
        <button onClick={handleDelete}>delete</button>
        <button>Done</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoState: state.todoState,
  };
};
const mapActionsToProps = (dispatch) => {
  return {
    addTodo: (newTodo) => dispatch(AddTodo(newTodo)),
    removeTodo: (index) => dispatch(RemoveTodo(index)),
    createTodo: (formValue) => dispatch(CreateNewTodo(formValue)),
    markComplete: (newTodo) => dispatch(MarkComplete(newTodo))
  };
};

export default connect(mapStateToProps, mapActionsToProps)(TodoList);
