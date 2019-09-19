import React from "react";
import { Text, View, Button } from "react-native";
import { createDrawerNavigator } from "react-navigation";

import Home from "../containers/home/Home";

import Setting from "react-native-vector-icons/AntDesign";

class SettingsScreen extends React.Component {
	render() {
		return <Button onPress={() => this.props.navigation.goBack()} title="Go back home" /> Home;
	}
}
class ContactsScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Contact!</Text>
			</View>
		);
	}
}

export default createDrawerNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			header: null,
			drawerLabel: "Home",
			drawerIcon: ({ tintColor }) => <Setting name="home" size={30} />
		}
	},
	Settings: {
		screen: SettingsScreen,
		navigationOptions: {
			drawerLabel: "Settings",
			drawerIcon: ({ tintColor }) => <Setting name="setting" size={17} />
		}
	},
	Profile: {
		screen: ContactsScreen,
		navigationOptions: {
			drawerLabel: "Profile",
			drawerIcon: ({ tintColor }) => <Setting name="contacts" size={17} />
		}
	}
});
