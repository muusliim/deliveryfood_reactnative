import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchBar = () => {
	return (
		<View style={styles.searchContainer}>
			<View style={styles.searchSection}>
				<View style={styles.searchField}>
					<Ionicons
						style={styles.searchIcon}
						name="ios-search"
						size={20}
						color={Colors.medium}
					/>
					<TextInput style={styles.input} placeholder="Поиск ресторана" />
				</View>
				<Link href={"/"} asChild>
					<TouchableOpacity style={styles.optionButtonStyle}>
						<Ionicons name="options-outline" size={25} color={Colors.primary} />
					</TouchableOpacity>
				</Link>
			</View>
		</View>
	);
};

const CustomHeader = () => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<TouchableOpacity>
					<Image
						source={require("../assets/images/deliveryManLogo.png")}
						style={styles.logo}
					/>
				</TouchableOpacity>

				<TouchableOpacity style={styles.titleContainer}>
					<Text style={styles.title}>Закажите • сейчас</Text>
					<View style={styles.locationStyle}>
						<Text style={styles.subtitle}>Санкт-Петербург</Text>
						<Ionicons name="chevron-down" size={20} color={Colors.primary} />
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={styles.profileButton}>
					<Ionicons name="person-outline" size={20} color={Colors.primary} />
				</TouchableOpacity>
			</View>
			<SearchBar />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#fff",
	},
	container: {
		height: 60,
		backgroundColor: "#fff",
		flexDirection: "row",
		gap: 20,
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	logo: {
		width: 30,
		height: 30,
	},
	titleContainer: {
		flex: 1,
	},
	searchContainer: {
		height: 60,
		backgroundColor: "#fff",
	},
	profileButton: {
		backgroundColor: Colors.lightGrey,
		padding: 10,
		borderRadius: 50,
	},
	title: {
		fontSize: 15,
		color: Colors.medium,
	},
	subtitle: {
		fontSize: 18,
		fontWeight: "bold",
	},
	locationStyle: {
		flexDirection: "row",
		alignItems: "center",
	},
	searchSection: {
		flexDirection: "row",
		gap: 10,
		paddingHorizontal: 20,
    marginBottom: 8,
		alignItems: "center",
	},
	searchField: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: Colors.lightGrey,
		padding: 3,
		borderRadius: 30,
		paddingHorizontal: 20,
	},
	input: {
		padding: 10,
		fontSize: 16,
	},
	optionButtonStyle: {
		padding: 10,
		borderRadius: 50,
	},
	searchIcon: {},
});

export default CustomHeader;
