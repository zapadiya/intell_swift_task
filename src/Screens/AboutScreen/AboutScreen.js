import React, {Component} from 'react';
import {View, ScrollView, Dimensions, TouchableOpacity, Image, Text} from 'react-native';
import {connect} from "react-redux";
import {MainHeader} from "@Component";
import styles from "./AboutScreenStyle";
import * as resources from '../../Resources';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import { color } from '../../Constants/Color';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

class AboutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex:0,
            carouselItems: [1, 2, 3, 4, 5, 6],
            pageName: this.props.route.params != undefined? this.props.route.params.params: '',
            title: this.props.route.params != undefined? this.props.route.params.title: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <MainHeader centerTitle={'વિચાર ક્રાંતિ અભિયાન'} navigationProps={this.props.navigation} leftIcon={'menu'}/>
                <ScrollView contentContainerStyle={styles.menuContainer}>
                    <View style={styles.txtDetailContainer}>
                        <Text style={styles.txtDetail}>
                            {'લoreરેમ ઇપ્સમ એ ફક્ત પ્રિન્ટિંગ અને ટાઇપસેટિંગ ઉદ્યોગનો ડમી ટેક્સ્ટ છે. લoreરેમ ઇપ્સમ 1500 ના દાયકાથી જ ઉદ્યોગનો માનક બનાવટી લખાણ રહ્યો છે, જ્યારે કોઈ અજાણ્યા પ્રિંટર પ્રકારનો ગેલ લગાવીને તેને ટાઇપ સેમ્પ્યુન બુક બનાવવા માટે ભંગાર કરતો હતો. તે ફક્ત પાંચ સદીઓથી જ બચી શક્યું છે, પણ ઇલેક્ટ્રોનિક ટાઇપસેટીંગમાં પણ કૂદી પડ્યું છે, અનિવાર્યપણે યથાવત છે. લ60રેમ ઇપ્સમ ફકરાઓવાળી લેટ્રેસેટ શીટ્સના પ્રકાશન સાથે 1960 ના દાયકામાં તે લોકપ્રિય થયું હતું, અને તાજેતરમાં લોરેમ ઇપ્સમના સંસ્કરણો સહિત એલ્ડસ પેજમેકર જેવા ડેસ્કટ publishપ પબ્લિશિંગ સ softwareફ્ટવેર દ્વારા.'}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(AboutScreen);
