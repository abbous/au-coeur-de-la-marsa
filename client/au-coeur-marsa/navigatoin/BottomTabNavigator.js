import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomNavigation, Text } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import stackNavigation from '../navigatoin/AppNavigationStack'

import HomeScreen from '../screens/HomeScreen';
import FeedScreen from '../screens/FeedScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
	  { key: 'home', title: 'Categories', icon: 'home', color: '#3F51B5' },
	  { key: 'feed', title: 'Feed', icon: 'information', color: '#009688' },
	]);
  
	const renderScene = BottomNavigation.SceneMap({
		home: HomeScreen,
		feed: FeedScreen,
	});
    
	return (
		<BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
    />


		// <NavigationContainer>
		// 	<Tab.Navigator>
		// 		<Tab.Screen
		// 			options={{
        //                 tabBarActiveBackgroundColor:'red',
        //                 title:"Categories",
		// 				tabBarLabel: 'Home',
		// 				tabBarIcon: () => <MaterialCommunityIcons name="home" color="black" size={30} />
		// 			}}
		// 			name="Home"
		// 			component={HomeScreen}
		// 		/>
		// 		<Tab.Screen
		// 			options={{
		// 				tabBarLabel: 'Feed',
		// 				tabBarIcon: () => <MaterialCommunityIcons name="information" color="black" size={30} />
		// 			}}
		// 			name="Feed"
		// 			component={FeedScreen}
		// 		/>
		// 	</Tab.Navigator>
		// </NavigationContainer>
	);
}
