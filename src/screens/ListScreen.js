import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import NameListItem from '../components/NameListItem';

const ListScreen = () => {
	const names = [
		{
			name: 'Aaren',
			number: '+233123456',
			image: require('../../assets/rick.jpeg'),
		},

		{
			name: 'China',
			number: '+232343453',
		},

		{
			name: 'Choco milo',
			number: '+76456454',
		},
	];

	return (
		<View style={styles.container}>
			<FlatList
				data={names}
				renderItem={({ item }) => {
					return (
						<NameListItem
							name={item.name}
							number={item.number}
							image={item.image}
						/>
					);
				}}
				keyExtractor={(item) => item.number}
			/>
		</View>
	);
	// return (
	// 	<ScrollView>
	// 		<View style={styles.container}>
	// 			{names.map((name) => {
	// 				return <Text style={styles.name}>{name}</Text>;
	// 			})}
	// 		</View>
	// 	</ScrollView>
	// );
};

export default ListScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
