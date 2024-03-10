import { Stack, useNavigation } from "expo-router";
import CustomHeader from "../components/CustomHeader";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";



export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "index",
};

export default function RootLayoutNav() {
	const navigation = useNavigation();
	

	return (
		<BottomSheetModalProvider>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						header: () => <CustomHeader />,
					}}
				/>
				<Stack.Screen
					name="(modal)/filter"
					options={{
						presentation: "modal",
						headerTitle: "Фильтр",
						animation: "slide_from_bottom",
						headerTitleAlign: "center",
						headerShadowVisible: false,
						headerStyle: {
							backgroundColor: Colors.lightGrey,
						},
						headerTitleStyle: {
							color: Colors.primary,
							fontSize: 20,
							fontWeight: "bold",
						},
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => {
									navigation.goBack();
								}}
							>
								<Ionicons
									name="close-outline"
									size={28}
									color={Colors.primary}
								/>
							</TouchableOpacity>
						),
					}}
				/>

				<Stack.Screen
					name="(modal)/location-search"
					options={{
						presentation: "fullScreenModal",
						headerTitle: "Выбрать локацию",
						animation: "slide_from_bottom",
						headerTitleAlign: "center",
						headerShadowVisible: false,
						headerStyle: {
							backgroundColor: Colors.lightGrey,
						},
						headerTitleStyle: {
							color: Colors.primary,
							fontSize: 20,
							fontWeight: "bold",
						},
						headerLeft: () => (
							<TouchableOpacity
								onPress={() => {
									navigation.goBack();
								}}
							>
								<Ionicons
									name="close-outline"
									size={28}
									color={Colors.primary}
								/>
							</TouchableOpacity>
						),
					}}
				/>
			</Stack>
		</BottomSheetModalProvider>
	);
}
