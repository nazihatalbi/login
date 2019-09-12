import { createAppContainer, createStackNavigator } from "react-navigation";
import Splash from "../containers/Splash";
import SignIn from "../containers/SignIn";
import Home from "../containers/Home";
import { colors } from "../themes";

const AppNavigator = createStackNavigator(
	{
		Splash: {
			screen: Splash,
			navigationOptions: {
				header: null
			}
		},
		SignIn: {
			screen: SignIn,
			navigationOptions: {
				header: null
			}
		},
		Home: {
			screen: Home,
			navigationOptions: {
				title: "Home",
				headerStyle: {
					backgroundColor: "#FFBF00"
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold"
				}
			}
		}
	},
	{
		initialRouteName: "Home",
		navigationOptions: {
			headerStyle: {
				elevation: 0,
				shadowOpacity: 0,
				shadowOffset: {
					height: 0
				},
				shadowRadius: 0
			}
		}
	}
);
export default createAppContainer(AppNavigator);
