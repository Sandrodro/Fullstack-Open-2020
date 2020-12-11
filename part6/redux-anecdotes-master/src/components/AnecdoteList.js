import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { vote } from "../reducers/anecdoteReducer"
import { voteNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
    return (
        anecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => {
                        dispatch(vote(anecdote.id))
                        dispatch(voteNotification(anecdote.content, 3000))
                    }}>vote</button>
                </div>
            </div>
        )
    )
}

export default AnecdoteList