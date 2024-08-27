import './todoLikes.css'

function TodoLikes({ likes, onAumentarLike, onDisminuirLike }) {

    return (
        <div>
            <div className='like'>
                <span>{likes}</span>
            </div>
            <div className='containers'>
                <div>
                    <button className="button" onClick={onAumentarLike}>Like</button>
                </div>
                <div className='contdislike'>
                <button className="button" onClick={onDisminuirLike}>Dislike</button>
                </div>
            </div>
        </div>
    )
}

export { TodoLikes }