import * as types from './actionTypes'

const initialState = {
    loading: false,
    userDetail: {},
    isLogin: false
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
			return {
				...state, 
                userDetail: action.payload.data,
                message: action.payload.message,
                isLogin: true
			};
		case types.LOGIN_ERROR:
			return {
                ...state,
                isLogin: false,
				message: action.payload,
			};
        default:
            return state
    }
};

export default userReducer
