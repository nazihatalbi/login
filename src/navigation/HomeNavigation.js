import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "../containers/home/Home";
import TodoDetails from "../containers/home/TodoDetails";

const HomeNavigation = createStackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {}
		},
		TodoDetails: {
			screen: TodoDetails,
			navigationOptions: {}
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
export default createAppContainer(HomeNavigation);
