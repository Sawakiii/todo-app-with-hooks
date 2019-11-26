import React from 'react';
import Form from "./Form";
import List from "./List";

const App = () => {
  // useState()の引数は初期値
  const [todos, setTodos] = React.useState([
    {
      //削除する際に一意になる必要があるので、idを追加。
      id: 0,
      desc: "仕事をする"
    }
  ])

  return (
    <div>
      <Form todos={todos} setTodos={setTodos}></Form>
      <List todos={todos} setTodos={setTodos}></List>
    </div>
  );
};

export default App;
