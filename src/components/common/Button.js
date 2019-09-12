import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { colors, metrics } from "../../themes";

export default function Button(props) {
	const { style, full, opacity, children, disabled, ...otherProps } = props;
	const buttonStyles = [styles.button, full && styles.full, style];

	return (
		<TouchableOpacity
			style={[buttonStyles, disabled ? { backgroundColor: colors.grey2 } : null]}
			disabled={disabled}
			activeOpacity={opacity || 0.8}
			{...otherProps}
		>
			{children}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: metrics.xSmallRadius,
		height: 50,
		paddingVertical: metrics.smallMargin,
		alignItems: "center",
		justifyContent: "center"
	},
	full: {
		width: metrics.width - 50,
		backgroundColor: colors.primary
	}
});
