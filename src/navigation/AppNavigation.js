import { createAppContainer, createStackNavigator } from "react-navigation";
import Splash from "../containers/Splash";
import SignIn from "../containers/SignIn";
import Home from "../containers/Home";

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
			navigationOptions: {}
		}
	},
	{
		initialRouteName: "Splash",
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
