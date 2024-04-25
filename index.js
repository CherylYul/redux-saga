const redux = require("redux")
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = "BUY_CAKE"
const BUY_COOKIE = "BUY_CO0KIE"

const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: "first redux"
    }
}

const buyCookie = () => {
    return {
        type: BUY_COOKIE
    }
}

const initialCakeState = {
    numOfCake: 10,
}

const initialCookieState = {
    numOfCookie: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake - 1
            }
        default:
            return state
    }
}

const cookieReducer = (state = initialCookieState, action) => {
    switch(action.type) {
        case BUY_COOKIE:
            return {
                ...state,
                numOfCookie: state.numOfCookie - 1
            }
        default:
            return state
    }
}

const rootReducers = combineReducers({
    cake: cakeReducer,
    cookie: cookieReducer
})

const store = createStore(rootReducers)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log("Update state", store.getState())
})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCookie())
unsubscribe()