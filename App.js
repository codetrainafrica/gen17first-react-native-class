import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import FormScreen from './src/screens/FormScreen';
import ListScreen from './src/screens/ListScreen';

export default function App() {
	return (
		<View style={styles.container}>
			<ListScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 100,
	},
});

// export default function App() {
// 	return (
// 		<View style={styles.container}>
// 			<View style={[styles.box, styles.boxRight]}></View>
// 			<View style={styles.box}></View>
// 			<View style={styles.box}></View>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 100,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'space-evenly',
// 		// flexDirection: 'row',
// 	},
// 	box: {
// 		flex: 30,
// 		width: 50,
// 		height: 50,
// 		backgroundColor: 'green',
// 		margin: 5,
// 	},

// 	boxRight: {
// 		// alignSelf: 'center',
// 		position: 'absolute',
// 		top: 0,
// 		left: 150,
// 		right: 0,
// 		bottom: 0,
// 		backgroundColor: 'red',
// 		zIndex: 100,
// 	},

// 	thanksText: {
// 		fontSize: 20,
// 		color: 'red',
// 	},

// 	logo: {
// 		width: 300,
// 		height: 300,
// 	},
// });
