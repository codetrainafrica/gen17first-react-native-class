import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
	const handleOnPress = () => {
		navigation.navigate('contactList');
	};

	const handleSeeDetails = () => {
		navigation.navigate('details', {
			name: 'Killerbean',
			age: '12',
		});
	};
	return (
		<View>
			<Text style={styles.text}>Home</Text>
			<TouchableOpacity onPress={handleOnPress}>
				<Text style={styles.seeContactButton}>See Contacts</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={handleSeeDetails}>
				<Text style={styles.seeContactButton}>See Details</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	text: {
		fontSize: 40,
	},

	seeContactButton: {
		fontSize: 35,
		color: 'red',
	},
});
