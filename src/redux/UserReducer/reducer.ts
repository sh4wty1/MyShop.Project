interface User {
    name: string,
    email: string,
}

interface UserState {
    user: User | null,
}

const initialState: UserState = {
    user: null,
}

interface UserAction {
    type: string,
    payload?: User,
}

export const userReducer = (state = initialState, action: UserAction) => {
    if (action.type === "user/login") {
        return {
            ...state,
            user: action.payload as User,
    }
    } else if (action.type === "user/logout") {
        return {
            ...state,
            user: null,
    }
    }

    return state
}