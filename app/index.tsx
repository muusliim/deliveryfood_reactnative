import { Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Categories from "@/components/Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import Restaurants from "@/components/Restaurants";
import Colors from "@/constants/Colors";

const Page = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
				<Categories />
				<Text style={styles.header}>Популярное</Text>
				<Restaurants />
				<Text style={styles.header}>Рестораны</Text>
				<Restaurants />
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		top: 60,
		backgroundColor: Colors.lightGrey,
		flex: 1,
	},
	header: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 15,
		marginBottom: 8,
		paddingHorizontal: 16,
	},
});
export default Page;
