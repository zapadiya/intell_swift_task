import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import styles from './MainHeaderStyle';
import { color } from "../../Constants/Color";
import LinearGradient from 'react-native-linear-gradient';

export const MainHeader = (props) => {
	const onLeftButtonClick = () => {
		if(props._onLeftAction !== undefined){
			props._onLeftAction();
		}else{			
			props.navigationProps.toggleDrawer();
		}
	}

	const leftComponent = () => {
		return (
			<TouchableOpacity onPress={() => onLeftButtonClick()}>
				<Icon name={props.leftIcon} size={25} color={'#FFF'} />
			</TouchableOpacity>
		);
	}

	const rightComponent = () => {
		return (
			<TouchableOpacity onPress={() => props._onRightAction()}>
				<Icon name={props.rightIcon} size={25} color={'#FFF'} />
			</TouchableOpacity>
		);
	}

	return (
		<Header
			ViewComponent={LinearGradient} // Don't forget this!
			linearGradientProps={{
				colors: [color._PRIMARY, color._SECONDARY, color._THIRD],
				start: { x: 0, y: 0.5 },
				end: { x: 1, y: 0.5 },
			}}
			containerStyle={[props.style, {color: '#FFF', backgroundColor: color._PRIMARY, paddingLeft: 15 }]}
			leftComponent={leftComponent()}
			leftContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center'}} 
			centerContainerStyle={{ flex: 5, alignItems: 'center', justifyContent: 'center'}} 
			centerComponent={{ text: props.centerTitle, style: [styles.centerText] }} 
			rightComponent={rightComponent()}
			rightContainerStyle={{ flex: 1, }}
			style={{ borderBottomColor: color._PRIMARY }}
			/>
			
	);}

export default MainHeader;
