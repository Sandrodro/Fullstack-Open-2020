import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import notificationReducer from "./reducers/notificationReducer"
import anecdoteReducer from "./reducers/anecdoteReducer"

const reducer = combineReducers({
    notifications: notificationReducer,
    anecdotes: anecdoteReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;