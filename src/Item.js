import React from "react";

const Item = (props) => {
    return (
        <li>
            <p>{props.todo}</p>
            <button>完了</button>
        </li>
    );
};

export default Item;

