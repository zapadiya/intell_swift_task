import {StyleSheet} from "react-native";
import {color} from "../../Constants/Color";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    leftContainer:{
        flex: 1
    },
    leftMain:{

    },
    leftTxt:{
        fontSize: 20,
        fontWeight: '600',
        color: color._SECONDARY,
    },
    leftIcon:{
        fontSize: 30,
        color: color._SECONDARY,
        marginLeft: -10,
    },
    centerContainer:{
        flex: 4
    },
    centerText:{
        color: color._PRIMARYTXT, 
        fontSize: wp(4.5), 
        fontWeight: '600',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightContainer:{
        flex: 1
    },
});

export default styles;