import { getDishById } from "@/assets/data/restaurant";
import Colors from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeInLeft } from "react-native-reanimated";

const Dish = () => {
	const { id } = useLocalSearchParams();
	const item = getDishById(+id);
	const addToCart = () => {};
	return (
		<View style={styles.container}>
			<Animated.Image
				entering={FadeIn.duration(600).delay(300)}
				source={item?.img}
				style={styles.img}
			/>
			<View style={{ padding: 20 }}>
				<Animated.Text
					entering={FadeInLeft.duration(600).delay(300)}
					style={styles.dish}
				>
					{item?.name}
				</Animated.Text>
				<Animated.Text
					entering={FadeInLeft.duration(600).delay(500)}
					style={styles.dishText}
				>
					{item?.info}
				</Animated.Text>
			</View>

			<View style={styles.footer}>
				<View>
					<TouchableOpacity style={styles.fullButton}>
						<Text
							style={styles.textButton}
							onPress={addToCart}
						>{`Добавить в корзину за ${item?.price}$`}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	img: {
		width: "100%",
		height: 300,
	},
	dish: {
		fontSize: 24,
		fontWeight: "bold",
	},
	dishText: {
		fontSize: 18,
		fontWeight: "normal",
		color: "gray",
		marginTop: 10,
	},
	footer: {
		position: "absolute",
		backgroundColor: "#fff",
		padding: 10,
		bottom: 0,
		width: "100%",
		elevation: 10,
	},
	fullButton: {
		backgroundColor: Colors.primary,
		padding: 16,
		borderRadius: 4,
		margin: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	textButton: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 16,
	},
});

export default Dish;
