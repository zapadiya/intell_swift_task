import React, {Component} from 'react';
import {View, ScrollView, Dimensions, TouchableOpacity, Image, Text} from 'react-native';
import {connect} from "react-redux";
import {MainHeader} from "@Component";
import styles from "./CategoryScreenStyle";
import * as resources from '../../Resources';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import { color } from '../../Constants/Color';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

class CategoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex:0,
            carouselItems: [1, 2, 3, 4, 5, 6],
            pageName: this.props.route.params != undefined? this.props.route.params.params: '',
            title: this.props.route.params != undefined? this.props.route.params.title: '',
        };
    }

    componentDidMount(){
        console.log('params', this.props.route.params);
        this.setState({pageName: this.props.route.params.params, title: this.props.route.params.title})
    }

    render() {
        return (
            <View style={styles.container}>
                <MainHeader centerTitle={this.state.title} navigationProps={this.props.navigation} leftIcon={'menu'}/>
                <ScrollView contentContainerStyle={styles.menuContainer}>
                    {this.props.route.params.params == 'Question' &&
                        <>
                        <TouchableOpacity style={[styles.rowItem1]} onPress={() => console.log(111)}>
                            <Icon style={styles.menuIcon} name="book" size={35} color={color._SECONDARY} />
                            <Text style={styles.menuTitle}>{'શિક્ષણની હાવી દિશાના કેવી હોવી જોઈએ'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem1]} onPress={() => console.log(111)}>
                            <Icon style={styles.menuIcon} name="book" size={35} color={color._SECONDARY} />
                            <Text style={styles.menuTitle}>{'પરીક્ષાની તૈયારી કેવી રીતે કરાય'}</Text>
                        </TouchableOpacity>
                        </>
                    }
                    {this.props.route.params.params == 'Users' &&
                        <>
                        <TouchableOpacity style={[styles.rowItem1]} onPress={() => console.log(111)}>
                            <Icon style={styles.menuIcon} name="users" size={35} color={color._SECONDARY} />
                            <Text style={styles.menuTitle}>{'શિક્ષણની હાવી દિશાના વિડિઓ   '}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem1]} onPress={() => console.log(111)}>
                            <Icon style={styles.menuIcon} name="users" size={35} color={color._SECONDARY} />
                            <Text style={styles.menuTitle}>{'પરીક્ષાની તૈયારી માટેના વિડિઓ'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem1]} onPress={() => console.log(111)}>
                            <Icon style={styles.menuIcon} name="users" size={35} color={color._SECONDARY} />
                            <Text style={styles.menuTitle}>{'એપ્લિકેશન વિશેની માહિતીના વિડિઓ'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem1]} onPress={() => console.log(111)}>
                            <Icon style={styles.menuIcon} name="users" size={35} color={color._SECONDARY} />
                            <Text style={styles.menuTitle}>{'શીખવાની આદત વિકસાવવાના વિડિઓ'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem1]} onPress={() => console.log(111)}>
                            <Icon style={styles.menuIcon} name="users" size={35} color={color._SECONDARY} />
                            <Text style={styles.menuTitle}>{'શૈક્ષણિક માર્ગદર્શનના વિડિઓ'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem1]} onPress={() => console.log(111)}>
                            <Icon style={styles.menuIcon} name="users" size={35} color={color._SECONDARY} />
                            <Text style={styles.menuTitle}>{'નિષ્ણાત કૌશલ જુઓ વિડિઓ'}</Text>
                        </TouchableOpacity>
                        </>
                    }
                    {this.props.route.params.params == 'Female' &&
                        <>
                        <TouchableOpacity style={[styles.rowItem1]} onPress={() => console.log(111)}>
                            <Icon style={styles.menuIcon} name="female" size={35} color={color._SECONDARY} />
                            <Text style={styles.menuTitle}>{'એપ્લિકેશન વિશેની માહિતીના વિડિઓ'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem1]} onPress={() => console.log(111)}>
                            <Icon style={styles.menuIcon} name="female" size={35} color={color._SECONDARY} />
                            <Text style={styles.menuTitle}>{'વિવાહિત જીવનનો વિડિઓ'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem1]} onPress={() => console.log(111)}>
                            <Icon style={styles.menuIcon} name="female" size={35} color={color._SECONDARY} />
                            <Text style={styles.menuTitle}>{'સંતાનોની કેળવણીના વિડિઓ'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem1]} onPress={() => console.log(111)}>
                            <Icon style={styles.menuIcon} name="female" size={35} color={color._SECONDARY} />
                            <Text style={styles.menuTitle}>{'શીખવાની આદત વિકસાવવાના વિડિઓ'}</Text>
                        </TouchableOpacity>
                        </>
                    }
                    {this.props.route.params.params == 'Education' &&
                        <>
                        <TouchableOpacity style={[styles.rowItem]} onPress={() => console.log(111)}>
                            <Text style={styles.menuTitle}>{'અભ્યાશ કેમ કરશો'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem]} onPress={() => console.log(111)}>
                            <Text style={styles.menuTitle}>{'ધોરણ 10 બોર્ડની પરીક્ષા તપાસની પરીક્ષાની સાહિત્ય'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem]} onPress={() => console.log(111)}>
                            <Text style={styles.menuTitle}>{'બાલ્કો અને કિશોર વાર્તાઓ'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem]} onPress={() => console.log(111)}>
                            <Text style={styles.menuTitle}>{'ભારત ફોઉન્ડેશન દ્વારા પ્રકાશિત પુસ્તક લિસ્ટ એન્ડ એન્ડ વધારાની માહિતી'}</Text>
                        </TouchableOpacity>
                        </>
                    }
                    {this.props.route.params.params == 'Messages' &&
                        <>
                        <TouchableOpacity style={[styles.rowItem]} onPress={() => console.log(111)}>
                            <Text style={styles.menuTitle}>{'વિચાર ક્રાંતિ અભિયાન'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem]} onPress={() => console.log(111)}>
                            <Text style={styles.menuTitle}>{'પ્રશ્ન'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem]} onPress={() => console.log(111)}>
                            <Text style={styles.menuTitle}>{'યુવા વિકાસ'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem]} onPress={() => console.log(111)}>
                            <Text style={styles.menuTitle}>{'મહિલા વિકાસ'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem]} onPress={() => console.log(111)}>
                            <Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem]} onPress={() => console.log(111)}>
                            <Text style={styles.menuTitle}>{'આજની વાર્તા'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem]} onPress={() => console.log(111)}>
                            <Text style={styles.menuTitle}>{'પરીક્ષણ અને પરામર્શ'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem]} onPress={() => console.log(111)}>
                            <Text style={styles.menuTitle}>{'કારકિર્દી માર્ગદર્શન'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.rowItem]} onPress={() => console.log(111)}>
                            <Text style={styles.menuTitle}>{'પુસ્તકો'}</Text>
                        </TouchableOpacity>
                        </>
                    }
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(CategoryScreen);
