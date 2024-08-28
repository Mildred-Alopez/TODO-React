import './todoItem.css'
import { CompleteIcon } from '../TodoIcon/completeIcon'
import { DeleteIcon } from '../TodoIcon/deleteIcon'
import { TodoLikes } from '../TodoLikes/index'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

function TodoItem(props) {

    const {setOpenModal,} = useContext(TodoContext)

    const onEditar = () => {
        setOpenModal(true)
    }

    return (
        <li className='todoItem'>
            <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
            <button className='btEditar' onClick={onEditar}>Editar</button>
            <input type="text" readOnly value={props.text} 
            className={`todoItem-p ${props.completed && 'todoItem-p--complete'}`} />
            <TodoLikes
                onAumentarLike={props.onAumentarLike}
                likes={props.likes}
                onDisminuirLike={props.onDisminuirLike}
            />
            <DeleteIcon onDelete={props.onDelete} />
        </li>
    )
}

export { TodoItem }
