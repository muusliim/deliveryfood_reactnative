import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { categories } from "@/assets/data/home";
import Colors from "@/constants/Colors";
const Categories = () => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ padding: 15 }}
		>
			{categories.map((ctg) => (
				<View style={styles.categoryCard} key={ctg.text}>
					<Image source={ctg.img} />
					<Text style={styles.categoryText}>{ctg.text}</Text>
				</View>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	categoryCard: {
		width: 100,
		height: 125,
		backgroundColor: "#fff",
		marginEnd: 12,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 2,
		borderRadius: 4,
		justifyContent: "center",
		alignItems: "center",
	},
	categoryText: {
		padding: 5,
		fontSize: 15,
		fontWeight: "bold",
	},
});

export default Categories;


