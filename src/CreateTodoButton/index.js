import React from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext'

function CreateTodoButton() {

    const {
        abrirModal
    } = React.useContext(TodoContext)

    return (
        <div>
            <button className='createTodoButton' onClick={abrirModal}>+</button>
        </div>

    )
}
export { CreateTodoButton }