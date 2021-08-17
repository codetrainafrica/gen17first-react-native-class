import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from 'react-native';

const FormScreen = () => {
	const [form, setform] = useState({ email: '', password: '' });

	const handleOnChange = (name, text) => {
		setform({ ...form, [name]: text });
	};

	const handleSubmit = () => {
		console.log(form);
	};
	return (
		<ScrollView style={styles.container}>
			<Text>Hello world</Text>

			<TextInput
				style={styles.input}
				autoCompleteType="email"
				autoCorrect={false}
				autoCapitalize="words"
				onChangeText={(text) => {
					handleOnChange('email', text);
				}}
				value={form.email}
				placeholder="Email"
			/>

			<TextInput
				style={styles.input}
				secureTextEntry={true}
				autoCompleteType="password"
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={(text) => {
					handleOnChange('password', text);
				}}
				value={form.password}
			/>

			<TextInput
				style={styles.input}
				secureTextEntry={true}
				autoCompleteType="password"
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={(text) => {
					handleOnChange('password', text);
				}}
				value={form.password}
			/>

			<TextInput
				style={styles.input}
				secureTextEntry={true}
				autoCompleteType="password"
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={(text) => {
					handleOnChange('password', text);
				}}
				value={form.password}
			/>

			<TextInput
				style={styles.input}
				secureTextEntry={true}
				autoCompleteType="password"
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={(text) => {
					handleOnChange('password', text);
				}}
				value={form.password}
			/>

			<TextInput
				style={styles.input}
				secureTextEntry={true}
				autoCompleteType="password"
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={(text) => {
					handleOnChange('password', text);
				}}
				value={form.password}
			/>

			<TextInput
				style={styles.input}
				secureTextEntry={true}
				autoCompleteType="password"
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={(text) => {
					handleOnChange('password', text);
				}}
				value={form.password}
			/>

			<TouchableOpacity style={styles.button} onPress={handleSubmit}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		flex: 1,
		marginHorizontal: 16,
	},
	input: {
		fontSize: 40,
		color: 'red',
		borderColor: 'grey',
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
		marginVertical: 5,
	},

	button: {
		backgroundColor: 'green',
		width: 120,
		height: 50,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonText: {
		color: 'white',
		fontSize: 18,
	},
});
export default FormScreen;
