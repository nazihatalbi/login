import React, { Component } from "react";
import { Text, View, Button, ImageBackground } from "react-native";

import Image from "../images/splash.png";

export default class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timePassed: false
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.props.navigation.replace("SignIn");
		}, 2000);
	}

	render() {
		return (
			<View>
				<ImageBackground source={Image} style={{ width: "100%", height: "100%" }} />
			</View>
		);
	}
}
