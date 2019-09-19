import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { withNavigation } from "react-navigation";

import menu from "../../images/menu.png";

class NavigationDrawerStructure extends Component {
	toggleDrawer = () => {
		this.props.navigation.toggleDrawer();
	};
	render() {
		return (
			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity onPress={this.toggleDrawer}>
					<Image source={menu} style={{ width: 50, height: 50, marginLeft: 5, marginTop: 20 }} />
				</TouchableOpacity>
			</View>
		);
	}
}

export default withNavigation(NavigationDrawerStructure);
