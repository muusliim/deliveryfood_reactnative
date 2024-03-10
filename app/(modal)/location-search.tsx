import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const LocationSearch = () => {
	const navigation = useNavigation();
	const [initialRegion, setInitialRegion] = useState({
		latitude: 59.9343,
		longitude: 30.3351,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});
	return (
		<View style={{ flex: 1 }}>
			<GooglePlacesAutocomplete
				placeholder="Поиск"
				onPress={(data, details = null) => {
				}}
				query={{
					key: "API_KEY",
					language: "en",
				}}
				styles={{
					container: {
						flex: 0
					},
					textInput: {
						backgroundColor: Colors.lightGrey,
						paddingLeft: 35
					},
					textInputContainer: {
						padding: 8,
						backgroundColor: '#fff'
					},
				}}
			/>
			<MapView style={styles.map} region={initialRegion} />

			<View style={styles.absoluteBox}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.goBack();
					}}
				>
					<Text style={styles.buttonText}>Подтвердить</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
	absoluteBox: {
		position: "absolute",
		bottom: 20,
		width: "100%",
	},
	button: {
		backgroundColor: Colors.primary,
		padding: 16,
		borderRadius: 4,
		margin: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 16,
	},
});

export default LocationSearch;
