import React from "react";

const Form = (props) => {
    //submit時の関数を定義
    const handleSubmit = (e) => {
        //デフォルトのpage更新を阻止
        e.preventDefault()

        //新たなtodoリストを作成
        const newTodos = props.todos.slice()
        newTodos.push({
            id: props.todos.length,
            desc: e.target.desc.value
        })
        //todoリストを更新
        props.setTodos(newTodos)
    }
    return (
        <form action="submit" onSubmit={(e)=>{handleSubmit(e)}}>
            <input type="text" name="desc" id=""/>
            <button>追加</button>
        </form>
    );
};

export default Form;



