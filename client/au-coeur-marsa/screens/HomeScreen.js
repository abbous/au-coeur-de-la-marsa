import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import axios from 'axios';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {BASE_URL} from '@env'
export default function HomeScreen() {
	const [ categories, setCategories ] = useState([]);
	const [ categoriesImage, setCategoriesImage ] = useState([]);

	useEffect(() => {
 		axios.get(`${BASE_URL}/categories`).then((response) => {
			setCategories(response.data);
			setCategoriesImage(response.data.map((e) => e.imagePreview.url));
		});
	}, []);

	return (
		
	<SafeAreaView>
		<StatusBar/>
		<ScrollView>
			{categories.map((c) => (
				<TouchableOpacity
					key={c.id}
					onPress={() => {
						console.log('helloo');
					}}
				>
					<Card>
						<CardImage source={{ uri: `${BASE_URL+c.imagePreview.url}` }} />
						<CardTitle title={c.name} />
					</Card>
				</TouchableOpacity>
			))}
		</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		backgroundColor: 'red'
	}
});
