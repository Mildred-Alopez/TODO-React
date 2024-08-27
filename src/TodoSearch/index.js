import React from 'react'
import './todoSearch.css'
import { TodoContext } from '../TodoContext'

function TodoSearch() {
    const {
        searchValue, 
        setSearchValue 
    } = React.useContext(TodoContext)
    return (
        <input placeholder='Buscar Todo' className='todoSearch'
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}></input>
    )
}

export { TodoSearch }