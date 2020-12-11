const initialNotification = [
    "Add Anecdotes here"
]


const reducer = (state = initialNotification, action) => {
    switch (action.type) {
        case "VOTENOTIF": {
            const anecdoteVoted = action.data.anecdote
            return `You voted for "${anecdoteVoted}"`
        }
        case "REMOVE":
            return initialNotification
        case "NEW":
            return `You added "${action.data.text}"`
        default:
            return state;
    }
}

export const voteNotification = (anecdote, time) => {
    return async dispatch => {
        dispatch({
            type: "VOTENOTIF",
            data: {
                anecdote
            }
        });
        await setInterval(() => {
            dispatch({
                type: "REMOVE"
            })
        }, time)
    }
}

export const addNotification = (text, time) => {
    return async dispatch => {
        dispatch({
            type: "NEW",
            data: {
                text
            }
        });
        await setInterval(() => {
            dispatch({
                type: "REMOVE"
            })
        }, time)
    }
}

export default reducer;