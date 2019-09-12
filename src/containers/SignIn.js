import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet, Image } from "react-native";
import { EMAIL_REGEX } from "../helpers/constants";

import { fonts, metrics, colors } from "../themes";
import Button from "../components/common/Button";

import Logo from "../images/logo.png";
import { scale } from "../helpers/functions";

export default class SignIn extends Component {
	constructor() {
		super();
		this.state = {
			email: "nazihatalbi@gmail.com",
			password: "123456",
			mailvalidation: false,
			passwordvalidation: false,
			emailInput: "",
			passwordInput: ""
		};
	}

	validatEmail = emailInput => {
		this.setState({
			emailInput,
			mailvalidation: EMAIL_REGEX.test(emailInput.trim())
		});
	};

	validatepassword = passwordInput => {
		this.setState({
			passwordInput,
			passwordvalidation: passwordInput.length >= 6
		});
	};

	handleLogin = ({ email = this.state.emailInput, password = this.state.passwordInput }) => {
		if (email.trim() === this.state.email && this.state.password === password.trim()) {
			this.props.navigation.replace("Home");
		}
	};

	render() {
		return (
			<View style={ViewStyle.container}>
				<Image source={Logo} style={Styles.image} />
				<Text style={Styles.Title}>Sign In </Text>
				<TextInput
					style={[Styles.input, !this.state.mailvalidation ? Styles.error : null]}
					placeholder="Mail"
					onChangeText={this.validatEmail}
				/>
				<TextInput
					secureTextEntry={true}
					style={[Styles.input, !this.state.passwordvalidation ? Styles.error : null]}
					placeholder="password"
					onChangeText={this.validatepassword}
				/>
				<Button
					full={true}
					style={Styles.button}
					onPress={this.handleLogin}
					disabled={!this.state.mailvalidation || !this.state.passwordvalidation}
				>
					<Text style={Styles.text}>Se Connecter</Text>
				</Button>
			</View>
		);
	}
}
const ViewStyle = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});
const Styles = StyleSheet.create({
	input: {
		borderBottomColor: "#000000",
		borderBottomWidth: 1,
		width: 300
	},
	Title: {
		...fonts.h1,
		justifyContent: "center",
		alignItems: "center",
		color: colors.black,
		marginVertical: metrics.baseMargin
	},
	text: {
		...fonts.h1,
		color: colors.white
	},
	image: {
		width: scale(200),
		height: scale(200),
		justifyContent: "center",
		alignItems: "center"
	},
	button: {
		borderRadius: 40,
		backgroundColor: colors.bleu,
		marginVertical: metrics.baseMargin
	},
	error: {
		borderBottomColor: "red",
		borderBottomWidth: 2
	}
});
