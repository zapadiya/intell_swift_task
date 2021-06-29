import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 5);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuContainer:{
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtDetailContainer:{
        width: wp(90),
		marginBottom: hp(2),
		borderRadius: 20,
		backgroundColor: 'rgba(255, 255, 255, 1)',
		justifyContent: 'center',
		shadowColor: "rgba(65,16,141,255)",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.39,
		shadowRadius: 8.30,
		elevation: 13,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    txtDetail:{
		fontSize: wp('4'),
		letterSpacing: 0.1,
        textAlign: 'left'
	},	
});
export default styles;

