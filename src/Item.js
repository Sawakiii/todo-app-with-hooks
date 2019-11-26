import React from "react";

const Item = (props) => {
    const [isDone, setIsDone] = React.useState(false)
    const text = isDone ? "戻す" : "完了" 
    const handleClick = () => {
        setIsDone(!isDone)
    }
    const handleDelete = () => {
        // idのところから一個削除
        const newTodos = props.todos.slice()
        newTodos.splice(props.todo.id, 1)
        
        //idが一個ずれるので設定し直す。
        newTodos.map((todo, i)=>{
            return (
                todo.id = i,
                todo.desc = todo.desc
            )
        })
        props.setTodos(newTodos)
        
    }
    return (
        <li>
            <p>{props.todo.desc}</p>
            <button onClick={handleClick}>{text}</button>
            <button onClick={handleDelete}>削除</button>
        </li>
    );
};

export default Item;

