import anecdoteService from "../services/anecdotes"

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.data)
    case "VOTE": {
      const anecdoteToVote = state.find(anecdote => anecdote.id === action.data.id)
      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      return state.map(item => item.id !== action.data.id ? item : votedAnecdote)
    }
    case "INIT":
      return action.data
    default:
      return state;
  }
}

export const addAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch({
      type: "ADD",
      data: {
        content: anecdote.content,
        votes: 0,
        id: anecdote.id
      }
    })
  }
}
export const vote = id => {
  return {
    type: "VOTE",
    data: { id }
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT",
      data: anecdotes
    })
  }
}

export default reducer