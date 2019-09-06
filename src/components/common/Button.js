import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { colors, metrics } from "../../themes";

export default function Button(props) {
	const { style, full, opacity, children, ...otherProps } = props;
	const buttonStyles = [styles.button, full && styles.full, style];

	return (
		<TouchableOpacity style={buttonStyles} activeOpacity={opacity || 0.8} {...otherProps}>
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
