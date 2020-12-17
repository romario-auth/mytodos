import React, { useContext } from 'react';
import TodoListItem from './TodoListItem';
import { TodoContextType } from '../contexts/TodoContextType';
import { TodoContext } from '../contexts/TodoContext';

const TodoList = () => 
{
    const { todos } = useContext<TodoContextType>(TodoContext);

    return(
        <div>
            <table className="uk-table">
                <caption>Listas de tarefas</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tarefa</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos?.map(
                            todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                        )
                    }
                </tbody>
            </table>
        </div>);
}

export default TodoList;