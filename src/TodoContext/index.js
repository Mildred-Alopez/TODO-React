import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext()

function TodoProvider({ children }) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])
    const { item: contador, saveItem: saveContador } = useLocalStorage('CONTADOR_V1', 0)

    const [searchValue, setSearchValue] = React.useState('')
    const [id, setId] = React.useState()
    const [newTodoValue, setNewTodoValue] = useState('')

    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length

    const [openModal, setOpenModal] = useState(false)

    const abrirModal = () => {
        setOpenModal(!openModal)
    }

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText)
        }
    )
    const aumentarLike = (id) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((todo) => todo.id === id)
        newTodos[todoIndex].likes += 1
        saveTodos(newTodos)
    }
    const disminuirLike = (id) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((todo) => todo.id === id)
        if (newTodos[todoIndex].likes > 0) {
            newTodos[todoIndex].likes -= 1
        }
        saveTodos(newTodos)
    }
    const addTodo = (text) => {
        const newTodos = [...todos]
        if (text === '') {
            return ''
        } else {
            newTodos.push(
                {
                    id: contador + 1,
                    text,
                    completed: false,
                    likes: 0
                }
            )
            saveContador(contador + 1)
            saveTodos(newTodos)
        }
    }
    const completeTodo = (id) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((todo) => todo.id === id)
        if (newTodos[todoIndex].completed === true) {
            newTodos[todoIndex].completed = false
        } else {
            newTodos[todoIndex].completed = true
        }
        saveTodos(newTodos)
    }
    const deleteTodo = (id) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((todo) => todo.id === id)
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    const Update = (id, text) => {
        const newTodos = [...todos]
        if (text == '') {
            return ''
        } else {
            const todoIndex = newTodos.findIndex(
                (todo) => todo.id === id
            )
            newTodos[todoIndex].text = text
            saveTodos(newTodos)
        }

    }

    const Edit = (id) => {
        setOpenModal(true)
        setId(id)
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((todo) =>
            todo.id === id
        )
        setNewTodoValue(newTodos[todoIndex].text)
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            aumentarLike,
            disminuirLike,
            openModal,
            setOpenModal,
            abrirModal,
            newTodoValue,
            setNewTodoValue,
            Edit,
            id,
            setId,
            Update,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }