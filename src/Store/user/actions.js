import * as types from './actionTypes'
import {apiLoadingStart, apiLoadingStop} from './../global'
import ApiList from "../../Webservice/ApiList";
import Toast from 'react-native-toast-message';
import { StackActions } from '@react-navigation/native';

export const loginAction = (params, nav) => {
	return (dispatch) => {
		dispatch(apiLoadingStart());
		return  ApiList.login(params).then(data => {
			dispatch(apiLoadingStop());
			data = {
				responseCode: 200,
				username: params.username,
				message: "Login success"
			}
			if(data.responseCode){
				console.log("Login:", data)
				dispatch({ type: types.LOGIN_SUCCESS, payload: data});
				nav.reset({
					index: 0,
					routes: [{ name: 'Home' }],
				});
			}else{
				console.log("Login Error:", data)
                Toast.show({
					type: 'error', // type: 'success | error | info', 
					text1: 'Error',
					text2: data.message
				});
				dispatch({ type: types.LOGIN_ERROR, payload:data.message});
			}
		}).catch((error) => {
			console.log("Login Catch:", error)
            dispatch(apiLoadingStop());
			// dispatch({ type: types.LOGIN_ERROR, payload: error.error });
			let data = {
				responseCode: 200,
				username: params.username,
				message: "Login success"
			}
			dispatch({ type: types.LOGIN_SUCCESS, payload: data});
		});
	};
};