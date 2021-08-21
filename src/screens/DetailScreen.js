import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetailScreen = ({ route }) => {
	console.log(route.params);
	const { name, age } = route.params;
	return (
		<View>
			<Text style={styles.text}>Name: {name}</Text>
			<Text style={styles.text}>Age: {age}</Text>
		</View>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({
	text: {
		fontSize: 40,
	},
});
