import Colors from "@/constants/Colors";
import categories from "@/assets/data/filter.json";
import { useNavigation } from "expo-router";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	ListRenderItem,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useEffect, useState } from "react";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

interface Category {
	name: string;
	count: number;
	checked?: boolean;
}

type Item = {
	icon:
		| "arrow-down-outline"
		| "star-outline"
		| "pricetag-outline"
		| "nutrition-outline";
	name: string;
};

const filterItems: Item[] = [
	{
		name: "Сортировать",
		icon: "arrow-down-outline",
	},
	{
		name: "Рейтинг",
		icon: "star-outline",
	},
	{
		name: "Скидки",
		icon: "pricetag-outline",
	},

	{
		name: "Диетические",
		icon: "nutrition-outline",
	},
];

const ItemBox = () => (
	<>
		<View style={styles.itemContainer}>
			{filterItems.map((item) => (
				<TouchableOpacity style={styles.item} key={item.name}>
					<Ionicons name={item.icon} size={20} color={Colors.medium} />
					<Text style={styles.itemText}>{item.name}</Text>
					<Ionicons
						name="chevron-forward-outline"
						size={22}
						color={Colors.primary}
					/>
				</TouchableOpacity>
			))}
		</View>
		<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
			<Text style={styles.header}>Категории</Text>
		</View>
	</>
);

const Filter = () => {
	const navigation = useNavigation();
	const [items, setItems] = useState<Category[]>(categories);
	const [selected, setSelected] = useState<Category[]>([]);
	const flexWidth = useSharedValue(0);
	const scale = useSharedValue(0);

	useEffect(() => {
		const hasSelected = selected.length > 0;
		const selectedItems = items.filter((item) => item.checked);
		const newSelectedItems = selectedItems.length > 0;

		if (hasSelected !== newSelectedItems) {
			flexWidth.value = withTiming(newSelectedItems ? 150 : 0);
			scale.value = withTiming(newSelectedItems ? 1 : 0);
		}

		setSelected(selectedItems);
	}, [items]);

	const handleClearAll = () => {
		const newItems = items.map((item) => {
			return {
				...item,
				checked: false,
			};
		});
		setItems(newItems);
	};

	const animatedStyle = useAnimatedStyle(() => {
		return {
			width: flexWidth.value,
			opacity: flexWidth.value > 0 ? 1 : 0,
		};
	});

	const animatedText = useAnimatedStyle(() => {
		return {
			transform: [{ scale: scale.value }],
		};
	});

	const renderItem: ListRenderItem<Category> = ({ item, index }) => (
		<View style={styles.row}>
			<Text style={styles.itemText}>
				{item.name} ({item.count})
			</Text>
			<BouncyCheckbox
				size={25}
				fillColor={Colors.primary}
				disableBuiltInState
				unfillColor="#fff"
				innerIconStyle={{
					borderWidth: 2,
					borderColor: Colors.primary,
					borderRadius: 4,
				}}
				iconStyle={{
					borderColor: Colors.primary,
					borderRadius: 4,
					borderWidth: 2,
				}}
				isChecked={items[index].checked}
				onPress={() => {
					const isChecked = items[index].checked;
					const newItems = items.map((item) => {
						if (item.name === items[index].name) {
							return {
								...item,
								checked: !isChecked,
							};
						}
						return item;
					});
					setItems(newItems);
				}}
			/>
		</View>
	);
	return (
		<View style={styles.container}>
			<FlatList
				data={categories}
				renderItem={renderItem}
				ListHeaderComponent={<ItemBox />}
			/>

			<View style={styles.footer}>
				<View style={styles.btnContainer}>
					<Animated.View style={[animatedStyle, styles.outlineButton]}>
						<TouchableOpacity onPress={handleClearAll}>
							<Animated.Text style={[animatedText, styles.outlineButtonText]}>
								Сбросить
							</Animated.Text>
						</TouchableOpacity>
					</Animated.View>

					<TouchableOpacity
						style={styles.fullButton}
						onPress={() => navigation.goBack()}
					>
						<Text style={styles.footerText}>Готово</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ height: 70 }} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.lightGrey,
		padding: 24,
	},
	footer: {
		position: "absolute",
		bottom: 20,
		left: 0,
		right: 0,
		backgroundColor: "#fff",
		padding: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		elevation: 10,
		shadowColor: "#000000",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowOffset: {
			width: 0,
			height: -50,
		},
	},
	fullButton: {
		backgroundColor: Colors.primary,
		padding: 16,
		flex: 1,
		height: 56,
		borderRadius: 8,
		alignItems: "center",
	},
	footerText: {
		color: "#ffffff",
		fontWeight: "bold",
		fontSize: 16,
	},
	itemContainer: {
		backgroundColor: "#fff",
		padding: 8,
		borderRadius: 8,
		marginBottom: 16,
	},
	header: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 16,
	},
	item: {
		flexDirection: "row",
		gap: 20,
		paddingVertical: 15,
		alignItems: "center",
		backgroundColor: "#fff",
		borderColor: "#ccc",
		borderBottomWidth: 1,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#fff",
	},
	itemText: {
		flex: 1,
		fontSize: 16,
	},
	btnContainer: {
		flexDirection: "row",
		gap: 12,
		justifyContent: "center",
	},
	outlineButtonText: {
		color: Colors.primary,
		fontWeight: "bold",
		fontSize: 16,
	},
	outlineButton: {
		borderColor: Colors.primary,
		borderWidth: 0.5,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		height: 56,
	},
});

export default Filter;
