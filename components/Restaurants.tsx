import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Image,
} from "react-native";
import { restaurants } from "@/assets/data/home";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
const Restaurants = () => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ padding: 15 }}
		>
			{restaurants.map((restaurant, index) => (
				<Link href={"/details"} key={index} asChild>
					<TouchableOpacity>
						<View style={styles.categoryCard}>
							<Image source={restaurant.img} style={styles.image} />
							<View style={styles.categoryBox}>
								<Text style={styles.categoryText}>{restaurant.name}</Text>
								<Text style={{ color: Colors.green }}>
									{restaurant.rating} {restaurant.ratings}
								</Text>
								<Text style={{ color: Colors.medium }}>
									{restaurant.distance}
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				</Link>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	categoryCard: {
		width: 300,
		height: 270,
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
		padding: 1,
	},
	categoryText: {
		padding: 6,
		fontSize: 16,
		fontWeight: "bold",
	},
	image: {
		flex: 5,
		width: "100%",
		height: "100%",
		borderRadius: 4,
	},
	categoryBox: {
		flex: 2,
		padding: 10,
		alignItems: "stretch",
	},
	
});

export default Restaurants;
