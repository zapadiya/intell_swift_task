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
    carouselContainer:{
        ///marginTop: 10,
    },
    menuContainer:{
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowItem:{
		width: wp(90),
		height: 60,
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
        paddingHorizontal: 15
	},	
    rowItem1:{
        flexDirection: 'row',
		width: wp(90),
		height: 60,
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
        alignItems: 'center'
	},	
    menuIcon:{
        paddingLeft: 15,
        paddingRight: 15
    },
	menuTitle:{
		color: color._themeFont1,
		fontSize: wp('4'),
		letterSpacing: 0.1,
        textAlign: 'left',
        width: wp(70),
	},
    carouselContainer: {
        marginTop: 15
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'dodgerblue'
    },
    sliderImage: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        transform: [{ scale:1}]
    },
    counter: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
export default styles;

