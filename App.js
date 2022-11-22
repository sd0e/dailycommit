import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';

import CommitRing from './components/ui/CommitRing';

export default function App() {
	const [numCommits, setNumCommits] = useState(5);
	let [fontsLoaded] = useFonts({
		Inter_600SemiBold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.appContainer}>
				<CommitRing>{ numCommits }</CommitRing>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	appContainer: {
		padding: 50,
		paddingHorizontal: 16,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#191919',
		height: '100%',
	},
});
