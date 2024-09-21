type ActionsType = {
    type: string,
    payload: number
}

const counterReducer = (
    state: typeof initialState,
    action: ActionsType

): State => {

}

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const increment = (value: number) => {
    return {
        type: INCREMENT,
        payload: value
    }
}

const decrement = (value: number) => {
    return {
        type: DECREMENT,
        payload: value
    }
}

const reset = () => {
    return {
        type: RESET
    }
}

switch (action.type) {
    case INCREMENT:
        console.log("Count incremented by 1");
        return { ...state, count: state.count + Number(action.payload) }
    case DECREMENT:
        console.log("Count decremented by 1");
        return { ...state, count: state.count - Number(action.payload) }
    case RESET:
        return { ...StaticRange, count: 0 }
    default:
        return state
}