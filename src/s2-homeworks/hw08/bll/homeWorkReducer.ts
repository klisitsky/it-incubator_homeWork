import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state].sort((user1, user2) => {
                return action.payload === 'up'
                    ? user1.name.localeCompare(user2.name)
                    : user2.name.localeCompare(user1.name)
            }) // need to fix
        }
        case 'check': {
            return [...state].filter(u => u.age >= 18) // need to fix
        }
        default:
            return state
    }
}
