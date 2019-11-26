import React from "react";
import Item from "./Item";

// propsを引数に取る
const List = (props) => {
    // mapをして繰り返し処理を行っている。
    const todos = props.todos.map((todo, i)=>{
        return (
            <Item todo={todo}></Item>
        )
    });
    return (
        <ul>
            {todos}
        </ul>
    );
};

export default List;
