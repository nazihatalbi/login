import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import todo from "../images/todo.jpg";
import { metrics, colors } from "../themes";
import Item from "../containers/home/Home";

class Items extends Component {
	handlePress = () => {
		console.log(this.props.navigation);
		this.props.navigation.navigate("TodoDetails", { id: this.props.datasource.id });
	};

	render() {
		return (
			<TouchableOpacity style={ViewStyle.shadow} onPress={this.handlePress}>
				<Image style={Styles.image} source={todo} />

				<View style={{ flex: 1, justifyContent: "center", margin: 10 }}>
					<Text style={{ color: colors.grey, justifyContent: "flex-start" }}>{this.props.datasource.name}</Text>
					<Text style={{ color: colors.grey }}>{this.props.datasource.username}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

export default withNavigation(Items);
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
