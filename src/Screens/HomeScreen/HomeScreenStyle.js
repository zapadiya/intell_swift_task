import { Dimensions, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
// const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 5);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 0.40);

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
    listMain:{
        marginVertical: 20,
        paddingHorizontal: 10
    },
    listContainer:{
		flex: 1,
		flexDirection: 'row',
		marginBottom: 10,
		alignItems: 'center',
		height: wp(14),
		paddingHorizontal: wp(4),
		backgroundColor: '#b6cae8',
		shadowColor: "#000",
        borderRadius: 5,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 1.41,
		elevation: 2
	},
	colorRound:{
		width: wp(12),
		height: wp(12),
		borderRadius: 100,
		marginEnd: 15
	},
    imageRound:{
        width: wp(12),
		height: wp(12),
    },
	titleContainer:{
		width: wp(54),
		height: wp(12),
		justifyContent: 'center',
        // backgroundColor: 'red'
	},
    buttonContainer:{
		width: wp(10),
		height: wp(12),
		justifyContent: 'center'
	},
    title:{
        color: "#000",
		fontSize: wp('4'),
		letterSpacing: 0.1,
        textAlign: 'left',
        width: wp(70),
    },
    breed:{
        marginTop: 3,
        color: "#000",
		fontSize: wp('3.3'),
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

