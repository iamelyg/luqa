// import { createContext, useContext } from "react"
// export type GlobalContent = {
//   copy: string
//   setCopy:(c: string) => void
// }
// export const MyGlobalContext = createContext<GlobalContent>({
// copy: 'Hello World', // set a default value
// setCopy: () => {},
// })
// export const useGlobalContext = () => useContext(MyGlobalContext)

import * as React from 'react';
import { ITodo, TodoContextType } from './context/types';

const TodoContext = React.createContext<TodoContextType | null>(null);

interface Props {
    children: React.ReactNode
}

const TodoProvider: React.FC<Props> = ({ children }) => {
    const [todos, setTodos] = React.useState<ITodo[]>([
        {
            id: 1,
            title: 'post 1',
            description: 'this is a description',
            status: false,
        },
        {
            id: 2,
            title: 'post 2',
            description: 'this is a description',
            status: true,
        },
    ]);
    const saveTodo = (todo: ITodo) => {
        const newTodo: ITodo = {
            id: Math.random(), // not really unique - but fine for this example
            title: todo.title,
            description: todo.description,
            status: false,
        };
        setTodos([...todos, newTodo]);
    };
    const updateTodo = (id: number) => {
        todos.filter((todo: ITodo) => {
            if (todo.id === id) {
                todo.status = true;
                setTodos([...todos]);
            }
        });
    };
    return <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;

const useTodoContext = () => {
    const currentUserContext = React.useContext(TodoContext) as TodoContextType;

    if (!currentUserContext) {
        throw new Error(
            "useCurrentUser has to be used within <CurrentUserContext.Provider>"
        );
    }

    return currentUserContext;
};

export { useTodoContext }
//  const useTodoContext =  React.useContext(TodoContext) as TodoContextType