import React, { useRef } from 'react';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        //the default action being prevented is the sending of a request to the server
        const enteredText = textInputRef.current!.value as any;
        props.onAddTodo(enteredText)
        // console.log(enteredText)
    };
    //the todoSubmitHandler function should fire whenever the below form is submitted, so we can bind the form to the todoSubmitHandler by adding "onSubmit" like so: <form onSubmit={todoSubmitHandler}> ... </form>

    return (
    <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo=text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">ADD TODO</button>
    </form>)
};

export default NewTodo;