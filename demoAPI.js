import { createRequire } from "module";
const require = createRequire(import.meta.url);
const redux = require("redux")
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require("redux-thunk").default
// const reduxLogger = require("redux-logger")
const axios = require("axios")
// const logger = reduxLogger.createLogger()

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (err) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: err
    }
}

const initState = {
    loading: true,
    data: [],
    error: ""
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ""
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                const users = res.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchUsers())