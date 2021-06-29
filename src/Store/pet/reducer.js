import { act } from 'react-test-renderer';
import * as types from './actionTypes'

const initialState = {
    pets: []
};
const petReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SUCCESS:
			return {
				...state, 
                pets: action.payload
        };
		case types.ERROR:
			return {
                ...state,
				message: action.payload,
			};
        case types.GET_PETS:
            return { 
                ...state, 
                pets: action.payload 
            };
        case types.ADD_TO_PET_LIST:
            let copy = Object.assign({}, action.payload);
            return { 
                ...state, 
                pets: [...state.pets, copy]
            };
        case types.UPDATE_PET:
            let arrPets = [...state.pets];
            for (let i=0; i<arrPets.length; i++) {
                if (arrPets[i].id === action.payload.id) {
                    arrPets[i] = action.payload;
                    break;
                }
            }
            return { 
                ...state, 
                pets: arrPets
            };
        case types.REMOVE_FROM_PET_LIST:
            return { 
                ...state, 
                pets: state.pets.filter(pet => pet.id !== action.payload.id)
            };
        default:
            return state
    }
};

export default petReducer
