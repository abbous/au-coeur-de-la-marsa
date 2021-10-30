import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import FeedScreen from '../screens/FeedScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					options={{
                        title:"Categories",
						tabBarLabel: 'Home',
						tabBarIcon: () => <MaterialCommunityIcons name="home" color="black" size={30} />
					}}
					name="Home"
					component={HomeScreen}
				/>
				<Tab.Screen
					options={{
						tabBarLabel: 'Feed',
						tabBarIcon: () => <MaterialCommunityIcons name="information" color="black" size={30} />
					}}
					name="Feed"
					component={FeedScreen}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
