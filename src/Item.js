import React from "react";

const Item = (props) => {
    const [isDone, setIsDone] = React.useState(false)
    const text = isDone ? "戻す" : "完了" 
    const handleClick = () => {
        setIsDone(!isDone)
    }
    return (
        <li>
            <p>{props.todo}</p>
            <button onClick={handleClick}>{text}</button>
        </li>
    );
};

export default Item;

