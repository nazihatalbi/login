import { Dimensions, Platform } from "react-native";
import { scale } from "../helpers/functions";
const window = Dimensions.get("window");
const HEADER_MAX_HEIGHT = scale(180);
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? scale(40) : scale(53);
export default {
	height: window.height,
	width: window.width,
	smallIcon: scale(15),
	mediumIcon: scale(25),
	xsmallMargin: scale(5),
	smallMargin: scale(10),
	mediumMargin: scale(15),
	baseMargin: scale(20),
	doubleMediumMargin: scale(30),
	doubleBaseMargin: scale(40),
	bigMargin: scale(50),
	largeMrgin: scale(100),
	smallRadius: scale(10),
	xSmallRadius: scale(5),
	navBarHeight: scale(40),
	headerHeight: scale(50),
	menuIconSize: scale(35),
	headerMaxHeight: HEADER_MAX_HEIGHT,
	headerMinHeight: HEADER_MIN_HEIGHT,
	headerScrollDistance: HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
	menuItemHeight: scale(120)
};
