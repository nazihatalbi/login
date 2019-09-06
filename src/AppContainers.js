import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import AppNavigation from "./navigation/AppNavigation";
import { colors } from "./themes";

class AppContainer extends React.PureComponent {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar backgroundColor={colors.yellow2} barStyle="light-content" />
				<AppNavigation />
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
export default AppContainer;
