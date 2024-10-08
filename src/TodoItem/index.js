import './todoItem.css'
import { CompleteIcon } from '../TodoIcon/completeIcon'
import { DeleteIcon } from '../TodoIcon/deleteIcon'
import { TodoLikes } from '../TodoLikes/index'

function TodoItem(props) {

    return (
        <li className='todoItem'>
            <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
            <button className='btEditar' onClick={props.onEdit}>Editar</button>
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
