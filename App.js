import { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';

import CommitRing from './components/ui/CommitRing';
import DropdownButton from './components/ui/DropdownButton';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [numCommits, setNumCommits] = useState(5);
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				await Font.loadAsync({ Inter_600SemiBold });
			}
			catch {
				error => console.error(error);
			}
			finally {
				setAppIsReady(true);
			}
		})();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}


	return (
		<View
			style={styles.appContainer}
			onLayout={onLayoutRootView}
		>
			<DropdownButton>sd0e</DropdownButton>
			<CommitRing>{ numCommits }</CommitRing>
		</View>
	);
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
