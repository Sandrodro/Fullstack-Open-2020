import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from "../reducers/anecdoteReducer"
import { addNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch();

    const add = (e) => {
        e.preventDefault()
        const anecdote = e.target.anecdote.value
        dispatch(addAnecdote(anecdote))
        dispatch(addNotification(anecdote, 3000))
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={add}>
                <div><input name="anecdote" /></div>
                <button
                    type="submit">create</button>
            </form>
        </>
    )
}

export default AnecdoteForm;