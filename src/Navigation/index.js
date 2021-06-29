import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { color } from '../Constants/Color';
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import SplashScreen from "../Screens/SplashScreen";
import AddPetScreen from "../Screens/AddPetScreen";


const platform = Platform.OS;
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const sideDrawerScreen = () => {
	return (
		<View style={{backgroundColor: color._MENUBG, flex: 1}}>
			<Drawer.Navigator initialRouteName="Home" drawerType={Dimensions.width >= 768 ? 'permanent' : 'front'} 
				drawerContentOptions={{
					activeTintColor: '#e91e63',
					itemStyle: { marginVertical: 0, height: 65, justifyContent: 'center', width: '100%', borderBottomWidth: 1, borderBottomColor: color._PRIMARY },
			  	}}>
				<Drawer.Screen name="Home" component={HomeScreen} options={{drawerLabel: 'Dashboard',
					drawerIcon: ({ size }) => (
						<View style={styles.menuIcon}>
							<Icon name="book" size={35} color={color._SECONDARY} />
						</View>
					)
				}}/>
				{/* <Drawer.Screen name="Question" component={CategoryScreen} initialParams={{ params: 'Question', title: 'પ્રશ્ન' }} options={{drawerLabel: 'પ્રશ્ન',
					drawerIcon: ({ size }) => (
						<View style={styles.menuIcon}>
							<Icon name="question-square" size={35} color={color._SECONDARY} />
						</View>
					)
				}}/> */}
			</Drawer.Navigator>
		</View>
	);
  }

export default function Navigation(props) {
	const routeNameRef = React.useRef();
	const navigationRef = React.useRef();
	return (
		<NavigationContainer ref={navigationRef} onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name} 
			onStateChange={() => {
				const previousRouteName = routeNameRef.current; 
				const currentRouteName = navigationRef.current.getCurrentRoute().name
				//props.setCurrentRouteName(currentRouteName);
			}}>
			<Stack.Navigator>
				<Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Home" component={sideDrawerScreen} />
				<Stack.Screen options={{ headerShown: false }} name="AddPet" component={AddPetScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	menuIcon:{
		width: 50,
		height: hp(8),
        paddingTop: hp(1.5),
		alignItems: 'center'
	},
})