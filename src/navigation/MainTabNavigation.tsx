/** menu topDown in this App */
import * as React from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; import { getHeaderTitle } from '@react-navigation/elements';
import { FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Color from '../theme/Color';
/*** import screens components */
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import contact from '../screens/(tabs)/contact';
import Cart from '../screens/(tabs)/cart';


const Tab:any = createBottomTabNavigator();

export default function MainTabNavigation() {


    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    paddingHorizontal: wp(1),
                    paddingTop: 0,
                    backgroundColor: Color.background,
                    position: 'absolute',
                    borderTopWidth: 0,
                },
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName:any;

                    if (route.name === 'HomeScreen') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'shopping-cart' : 'shopping-cart';
                    }
                    else if (route.name === 'contact') {
                        iconName = focused ? 'envelope' : 'envelope';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? 'user-plus' : 'user';
                    }

                    // You can return any component that you like here!
                    return <FontAwesome name={iconName} size={hp(4)} color={color} />
                },
                tabBarActiveTintColor: Color.orangeTextHex,
                tabBarInactiveTintColor: 'gray',
            })}
        >
            {/** HomeScreen its the mean component  */}
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="contact" component={contact} />
             

        </Tab.Navigator>
    )
}