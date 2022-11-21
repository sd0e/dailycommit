import { StyleSheet, Text, View } from "react-native";

export default function CommitRing({ children }) {
	return (
		<View style={styles.commitRingOuter}>
			<Text style={styles.commitRingText}>{ children }</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	commitRingOuter: {
		shadowOffset: {
			width: 6,
			height: -6,
		},
		shadowColor: '#ffffff',
		shadowOpacity: 0.25,
		shadowRadius: 5,
		width: 256,
		height: 256,
		justifyContent: 'center',
		alignItems: 'center',
	},
	commitRingText: {
		color: '#ffffff',
		fontSize: 48,
	},
});