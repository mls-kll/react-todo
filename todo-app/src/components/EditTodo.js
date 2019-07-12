import React from 'react';
import { connect } from 'react-redux';
import EditError from './EditError';
import EditForm from './EditForm';

const EditTodo = ({ todo, id }) => {
  return <div>{todo !== undefined ? <EditForm id={id}  todo={todo}/> : <EditError />}</div>;
};

const mapStateToProps = (state, route) => {
  return {
    todo: state.todos.todos.find(todo => todo.id === route.match.params.id),
    id: route.match.params.id
  };
};

export default connect(
  mapStateToProps,
  undefined
)(EditTodo);
