import * as types from './actionTypes'
import {apiLoadingStart, apiLoadingStop} from './../global'
import ApiList from "../../Webservice/ApiList";
import Toast from 'react-native-toast-message';
import { StackActions } from '@react-navigation/native';

const dummyPets = [{
	id: 1,
	name: "Poetic Justice",
	image: 'https://cdn.britannica.com/s:800x1000/68/160068-050-53FE2889/Snowshoe-cat.jpg',
	breed: 'Snowshoe',
	description: "A white cat named White Boy is the pet of an artistic girl named Justice (Janet Jackson) in the John Singleton film Poetic Justice (1993)."
},
{
	id: 2,
	name: "Poetic 2",
	image: 'https://cdn.britannica.com/s:800x1000/68/160068-050-53FE2889/Snowshoe-cat.jpg',
	breed: 'Snowshoe',
	description: "A white cat named White Boy is the pet of an artistic girl named Justice (Janet Jackson) in the John Singleton film Poetic Justice (1993)."
}];

export const getPetAction = (params, nav) => {
	return (dispatch) => {
		dispatch(apiLoadingStart());
		return  ApiList.getPets(params).then(data => {
			dispatch(apiLoadingStop());
			if(data.responseCode){
				dispatch({ type: types.SUCCESS, payload: data});
				nav.reset({
					index: 0,
					routes: [{ name: 'Home' }],
				});
			}else{
                Toast.show({
					type: 'error', // type: 'success | error | info', 
					text1: 'Error',
					text2: data.message
				});
				//dispatch({ type: types.ERROR, payload:data.message});
				dispatch({ type: types.SUCCESS, payload: dummyPets});
			}
		}).catch((error) => {
            dispatch(apiLoadingStop());
			//dispatch({ type: types.ERROR, payload: error.error });
			dispatch({ type: types.SUCCESS, payload: dummyPets });
		});
	};
};

export const addPetAction = (pet) => {
	return (dispatch) => {
		dispatch({
			type: types.ADD_TO_PET_LIST,
			payload: pet
		});
	};
};

export const removePetAction = (pet) => {
	return (dispatch) => {
		dispatch({
			type: types.REMOVE_FROM_PET_LIST,
			payload: pet
		});
	};
};

export const updatePetAction = (pet) => {
	return (dispatch) => {
		dispatch({
			type: types.UPDATE_PET,
			payload: pet
		});
	};
};