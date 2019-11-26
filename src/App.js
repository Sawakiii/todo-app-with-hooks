import React from 'react';
import Form from "./Form";
import List from "./List";

const App = () => {
  // useState()の引数は初期値
  const [todos, setTodos] = React.useState([
      "仕事をする"
  ])

  return (
    <div>
      <Form></Form>
      <List todos={todos}></List>
    </div>
  );
};

export default App;
