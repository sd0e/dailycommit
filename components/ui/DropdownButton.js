import { StyleSheet } from 'react-native';
import { Button } from 'react-native-ui-lib';

export default function DropdownButton({ children }) {
	return (
		<Button style={styles.dropdownButtonOuter} label={children} backgroundColor="#090909" />
	);
}

const styles = StyleSheet.create({
	dropdownButtonOuter: {
		backgroundColor: '#141414',
		padding: 24,
		fontFamily: 'Inter_600SemiBold',
		color: '#ffffff',
		fontSize: 24,
		textTransform: 'none',
	},
});