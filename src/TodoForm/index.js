import React from "react";
import { TodoContext } from "../TodoContext";
import './todoForm.css'

function TodoForm() {
    const {
        setOpenModal,
        addTodo,
        newTodoValue,
        setNewTodoValue,
        id,
        setId,
        Update } = React.useContext(TodoContext)

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
        setNewTodoValue('')
    }

    const update = (event) => {
        event.preventDefault()
        Update(id, newTodoValue)
        setOpenModal(false)
        setNewTodoValue('')
        setId(false)
    }

    const onCancel = () => {
        setOpenModal(false)
        setNewTodoValue('')
        setId(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <div className='opacidad'>
            <div className="form-container">
                <p className="title">Nuevo TODO</p>

                <form className="form" onSubmit={id ? update : onSubmit}>

                    <div className="input-group">
                        <textarea type="text" name="username" id="username" placeholder="Crear todo"
                            value={newTodoValue}
                            onChange={onChange} />
                    </div>

                    <div className='buttons'>
                        <button className="sign2" >{id ? 'Actualizar' : 'Agregar'}</button>
                        <button onClick={onCancel} className="sign1">Cancelar</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export { TodoForm }