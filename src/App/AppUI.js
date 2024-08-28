import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from '../TodoLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm'


function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        aumentarLike,
        disminuirLike,
        openModal,
        totalTodos
    } = React.useContext(TodoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <TodoLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0 && totalTodos !== 0) && <h1 className='ti'>No hay coincidencias</h1>}
                {(!loading && totalTodos === 0) && <EmptyTodos />}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                        likes={todo.likes}
                        onAumentarLike={() => aumentarLike(todo.id)}
                        onDisminuirLike={() => disminuirLike(todo.id)}
                        editarText={todo.text} />
                ))}
            </TodoList>
            <CreateTodoButton />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export { AppUI }