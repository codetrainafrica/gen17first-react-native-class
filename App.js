import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import FormScreen from './src/screens/FormScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';

import { NavigationContainer } from '@react-navigation/native';

//1. Import createstacknavigator
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					// header: () => null,
					headerStyle: {
						backgroundColor: 'red',
					},
					headerTitleStyle: {
						color: 'white',
					},
				}}
			>
				<Stack.Screen
					options={{
						// header: () => null,
						title: 'Hello',
						// headerStyle: {
						// 	backgroundColor: 'red',
						// },
						// headerTitleStyle: {
						// 	color: 'white',
						// },
						headerLeft: () => {
							return (
								<Text
									style={{
										color: 'white',
										fontSize: 20,
										marginHorizontal: 20,
									}}
								>
									Left
								</Text>
							);
						},

						headerRight: () => {
							return (
								<Text
									style={{
										color: 'white',
										fontSize: 20,
										marginHorizontal: 20,
									}}
								>
									Right
								</Text>
							);
						},
					}}
					name="home"
					component={HomeScreen}
				/>
				<Stack.Screen name="contactList" component={ListScreen} />
				<Stack.Screen
					options={({ navigation }) => {
						return {
							headerRight: () => {
								return (
									<TouchableOpacity
										onPress={() =>
											navigation.navigate('contactList')
										}
									>
										<Text
											style={{
												color: 'white',
												fontSize: 20,
												marginHorizontal: 20,
											}}
										>
											Contacts
										</Text>
									</TouchableOpacity>
								);
							},
						};
					}}
					name="details"
					component={DetailScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
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
