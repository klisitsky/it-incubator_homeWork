
export type loadingReducerType = {
    isLoading: boolean
}

const initState: loadingReducerType = {
    isLoading: false,
}



export const loadingReducer = (state = initState, action: LoadingActionType): loadingReducerType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
