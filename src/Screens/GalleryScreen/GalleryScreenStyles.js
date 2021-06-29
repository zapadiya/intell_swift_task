import { StyleSheet, Dimensions, Platform } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";

export default  styles = StyleSheet.create({
	mainContainer:{
		flex:1,
	},
	container:{
		marginTop: 20
	},
	rowItems:{
		flexDirection: 'row',
		justifyContent: 'center'
	},
	itemsContainer:{
		width: wp(30),
		height: wp(30),
		backgroundColor: 'white',
		marginHorizontal: wp(1.2),
		borderRadius: 20,
		marginBottom: 20,
		// shadowColor: 'rgba(0, 0, 0, 0.3)',
		// shadowOffset: {
		// 	width: 0,
		// 	height: 6,
		// },
		// shadowOpacity: 0.39,
		// shadowRadius: 8.30,
		// elevation: 13,
	},
	itemsImage:{
		width: wp(30),
		height: wp(30),
		borderRadius: 20,
		
	},
	itemsTitle:{
		position: 'absolute',
		paddingVertical: 3,
		width: '100%',
		backgroundColor: 'rgba(255, 255, 250, 0.8)',
		bottom: 0,	
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20

	},
	menuTitle:{
		textAlign: 'center',
	}
});
