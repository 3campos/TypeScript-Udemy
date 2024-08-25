import React from 'react';
import './TodoList.css';
interface TodoListProps {
    items: {id: string, text: string}[];
    onDeleteTodo: (id: string) => void;
    //adding onDeleteTodo as a prop
    //gets the id of the todoDeleted as a parameter
}

const TodoList: React.FC<TodoListProps> = props => {
    return <ul>
        {props.items.map(todo => (
            <li key={todo.id}><span>{todo.text}</span>
                <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
                    {/* the bind method is used here to ensure that the onDeleteTodo function is called with specific arguments being passed in, i.e., the id of the todo item in this case. In turn, this turn will delete the todo item with the same id. */}
                    DELETE
                </button>
            </li>))}
    </ul>
};

export default TodoList;