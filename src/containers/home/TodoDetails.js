import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import details from "../../images/adress.png";
import { colors } from "../../themes";

export class TodoDetails extends Component {
	state = {
		item: null
	};
	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/users/${this.props.navigation.state.params.id}`)
			.then(response => {
				return response.json();
			})
			.then(res => {
				this.setState({ item: res });
				console.log(res);
			})
			.catch(e => {
				console.log("error");
			});
	}
	render() {
		console.log(this.props.navigation.state.params.id, "id");
		const { item } = this.state;
		return (
			<View>
				<View>
					<Image source={details} style={{ width: 200, height: 200, alignItems: "center" }} />
				</View>
				<View style={Styles.containers}>
					{item && <Text style={Styles.details}> Street:{item.address.street} </Text>}
					{item && <Text style={Styles.details}> suite:{item.address.suite} </Text>}
					{item && <Text style={Styles.details}>city:{item.address.city} </Text>}
					{item && <Text style={Styles.details}>zipcode:{item.address.zipcode} </Text>}
					{item && <Text style={Styles.details}>Geo lat:{item.address.geo.lat} </Text>}
					{item && <Text style={Styles.details}>Geo lng:{item.address.geo.lng} </Text>}
				</View>
			</View>
		);
	}
}

export default TodoDetails;
const Styles = StyleSheet.create({
	details: {
		color: "black",
		fontSize: 18,
		padding: 5
	}
});
