import React, { useState } from "react";
import { TodoContext } from "../TodoContext";
import './todoForm.css'

function TodoForm() {
    const { setOpenModal, addTodo } = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onEditar = () => {
        setOpenModal(false)
    }
    return (
        <div className='opacidad'>
            <div className="form-container">
                <p className="title">Nuevo TODO</p>
                <form className="form" onSubmit={onSubmit}>
                    <div className="input-group">
                        <textarea type="text" name="username" id="username" placeholder="Crear o editar todo"
                            value={newTodoValue}
                            onChange={onChange} />
                    </div>
                    <div className='buttons'>
                        <button className="sign2">Agregar</button>
                        <button className="sign3" onClick={onEditar}>Guardar</button>
                    </div>
                    <button onClick={onCancel} className="sign1">Cancelar</button>
                </form>
            </div>
        </div>
    )
}

export { TodoForm }