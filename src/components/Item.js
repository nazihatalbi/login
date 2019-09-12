import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import todo from "../images/todo.jpg";
import { metrics, colors } from "../themes";

export default class Items extends Component {
	render() {
		return (
			<TouchableOpacity style={ViewStyle.shadow}>
				<Image style={Styles.image} source={todo} />

				<View style={{ flex: 1, justifyContent: "center" }}>
					<Text style={{ color: colors.grey }}>{this.props.datasource.title}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
const Styles = StyleSheet.create({
	image: {
		width: 120,
		height: 80,
		borderRadius: 5
	}
});
const ViewStyle = StyleSheet.create({
	shadow: {
		backgroundColor: colors.white,
		margin: metrics.smallMargin,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 8
		},
		shadowOpacity: 0.46,
		shadowRadius: 11.14,
		flex: 1,
		flexDirection: "row",
		elevation: 17,
		borderRadius: 10
	}
});
