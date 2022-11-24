import { StyleSheet, Text, View } from "react-native";

export default function CommitRing({ children }) {
	return (
		<View style={styles.commitRingOuter}>
			<View style={styles.commitRingContainer}>
				<Text style={styles.commitRingText}>{ children }</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	commitRingOuter: {
		shadowOffset: {
			width: 6,
			height: 6,
		},
		shadowColor: '#ffffff',
		shadowOpacity: 0.25,
		shadowRadius: 256/2,
		elevation: 5,
		width: 256,
		height: 256,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 256/2,
	},
	commitRingText: {
		color: '#ffffff',
		fontSize: 48,
	},
});