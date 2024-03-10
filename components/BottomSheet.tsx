import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
	BottomSheetBackdrop,
	BottomSheetModal,
	useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import { forwardRef, useCallback, useMemo } from "react";
import { View, Text, Button, Touchable, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
	const snapPoints = useMemo(() => ["50%"], []);
	const renderBackdrop = useCallback(
		(props: any) => (
			<BottomSheetBackdrop
				disappearsOnIndex={-1}
				appearsOnIndex={0}
				{...props}
			/>
		),
		[]
	);
	const { dismiss } = useBottomSheetModal();
	return (
		<BottomSheetModal
			backgroundStyle={{ borderRadius: 0, backgroundColor: Colors.lightGrey }}
			handleIndicatorStyle={{ display: "none" }}
			backdropComponent={renderBackdrop}
			overDragResistanceFactor={0}
			ref={ref}
			snapPoints={snapPoints}
		>
			<View style={styles.contentContainer}>
				<View style={styles.toggle}>
					<TouchableOpacity style={styles.toggleActive}>
						<Text style={styles.activeText}>Доставка</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.toffleInactive}>
						<Text style={styles.inactiveText}>Самовывоз</Text>
					</TouchableOpacity>
				</View>

				<Text style={styles.subheader}>Ваша локация</Text>
				<Link href={"/(modal)/location-search"} asChild>
					<TouchableOpacity>
						<View style={styles.item}>
							<Ionicons
								name="location-outline"
								size={20}
								color={Colors.medium}
							/>
							<Text style={{ flex: 1 }}> Текущее местоположение</Text>
							<Ionicons
								name="chevron-forward-outline"
								size={20}
								color={Colors.primary}
							/>
						</View>
					</TouchableOpacity>
				</Link>

				<Text style={styles.subheader}>Время доставки</Text>
				<TouchableOpacity>
					<View style={styles.item}>
						<Ionicons name="time-outline" size={20} color={Colors.medium} />
						<Text style={{ flex: 1 }}>Сейчас</Text>
						<Ionicons
							name="chevron-forward-outline"
							size={20}
							color={Colors.primary}
						/>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button} onPress={() => dismiss()}>
					<Text style={styles.buttonText}>Подтвердить</Text>
				</TouchableOpacity>
			</View>
		</BottomSheetModal>
	);
});

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
	},
	toggle: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 20,
		marginBottom: 32,
	},
	toggleActive: {
		backgroundColor: Colors.primary,
		padding: 8,
		borderRadius: 32,
		paddingHorizontal: 30,
	},
	toffleInactive: {
		padding: 8,
		borderRadius: 32,
		paddingHorizontal: 30,
	},
	activeText: {
		color: "#fff",
		fontWeight: "700",
	},
	inactiveText: {
		color: Colors.primary,
		fontWeight: "700",
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},
	button: {
		backgroundColor: Colors.primary,
		padding: 16,
		borderRadius: 4,
		margin: 16,
		alignItems: "center",
		justifyContent: "center",
	},
	subheader: {
		fontSize: 16,
		fontWeight: "700",
		margin: 16,
	},
	item: {
		flexDirection: "row",
		gap: 8,
		padding: 16,
		alignItems: "center",
		backgroundColor: "#fff",
		borderColor: "#ccc",
		borderWidth: 1,
	},
});
export default BottomSheet;
