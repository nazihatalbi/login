import { createAppContainer, createStackNavigator, createDrawerNavigator } from "react-navigation";
import Splash from "../containers/Splash";
import SignIn from "../containers/SignIn";
import TodoDetails from "../containers/home/TodoDetails";
import TabNavigator from "./TabNavigation";
import MyDrawerNavigator from "./DrawerNavigation";

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
			screen: MyDrawerNavigator,
			navigationOptions: {
				title: "Home",
				header: null,
				headerStyle: {
					backgroundColor: "#FFBF00"
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold"
				}
			}
		},
		TodoDetails: {
			screen: TodoDetails,
			navigationOptions: {
				title: "user-details",

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
