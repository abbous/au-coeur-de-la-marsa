import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';

export default function AppNavigationStack() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerMode: 'none', headerShown: false }}>
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
