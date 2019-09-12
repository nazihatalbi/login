import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, AppRegistry, Image, ActivityIndicator } from "react-native";
import { colors, metrics, fonts } from "../themes";

import Items from "../components/Item";

export default class Item extends Component {
	constructor() {
		super();
		this.state = {
			datasource: [],
			isloading: true
		};
	}

	renderItem = ({ item }) => {
		return (
			<View>
				<Items datasource={item} />
			</View>
		);
	};

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then(function(response) {
				return response.json();
			})
			.then(res => {
				this.setState({ datasource: res, isloading: false });
			})
			.catch(e => {
				console.log("error");
			});
	}
	render() {
		return this.state.isloading ? (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size="large" color={colors.green} animating />
			</View>
		) : (
			<View>
				<Text style={{ textAlign: "center", fontSize: 18 }}>TODO LIST</Text>
				<FlatList style={{ backgroundColor: colors.grey2 }} data={this.state.datasource} renderItem={this.renderItem} />
			</View>
		);
	}
}
