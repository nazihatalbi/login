import React from "react";
import { Text, View } from "react-native";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import Icon from "react-native-vector-icons/Octicons";
import Setting from "react-native-vector-icons/AntDesign";

import Home from "../containers/home/Home";
import { colors } from "../themes";

class SettingsScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Settings!</Text>
			</View>
		);
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

const TabNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				tabBarIcon: ({ tintColor, focused }) => (
					<Icon name="home" size={30} color={focused ? colors.primary : colors.dimGray} />
				)
			}
		},
		Settings: {
			screen: SettingsScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor, focused }) => (
					<Setting name="setting" size={30} color={focused ? colors.primary : colors.dimGray} />
				)
			}
		},
		Contacts: {
			screen: ContactsScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor, focused }) => (
					<Setting name="contacts" size={30} color={focused ? colors.primary : colors.dimGray} />
				)
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: "green",
			inactiveTintColor: "gray"
		}
	}
);
export default createAppContainer(TabNavigator);
