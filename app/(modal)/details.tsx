import {
	View,
	Text,
	StyleSheet,
	Image,
	SectionList,
	ListRenderItem,
} from "react-native";
import React, { useLayoutEffect } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Colors from "@/constants/Colors";
import { restaurant } from "@/assets/data/restaurant";
import { Link, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Details = () => {
	const navigation = useNavigation();

	const DATA = restaurant.food.map((item, index) => ({
		title: item.category,
		data: item.meals,
		index,
	}));
	useLayoutEffect(() => {
		navigation.setOptions({
			headerTransparent: true,
			headerTitle: "",
			headerTintColor: Colors.primary,
			headerLeft: () => (
				<TouchableOpacity
					style={styles.roundButton}
					onPress={() => navigation.goBack()}
				>
					<Ionicons
						name="arrow-back-outline"
						size={24}
						color={Colors.primary}
					/>
				</TouchableOpacity>
			),
			headerRight: () => (
				<View style={styles.bar}>
					<TouchableOpacity style={styles.roundButton}>
						<Ionicons name="share-outline" size={24} color={Colors.primary} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.roundButton}>
						<Ionicons name="search-outline" size={24} color={Colors.primary} />
					</TouchableOpacity>
				</View>
			),
		});
	}, []);

	const renderItems: ListRenderItem<any> = ({ item, index }) => (
		<Link href={`/`} asChild>
			<TouchableOpacity style={styles.item}>
				<View style={{flex: 1}}>
					<Text>{item.name}</Text>
					<Text>{item.price}</Text>
				</View>
			</TouchableOpacity>
		</Link>
	);
	return (
		<>
			<ParallaxScrollView
				parallaxHeaderHeight={240}
				backgroundColor={"#fff"}
				renderForeground={() => (
					<Image
						source={restaurant.img}
						style={{ height: 240, width: "100%" }}
					/>
				)}
				stickyHeaderHeight={100}
				contentForegroundColor={Colors.lightGrey}
				renderStickyHeader={() => (
					<View style={styles.stickySection}>
						<Text style={styles.stickySectionText}>{restaurant.name}</Text>
					</View>
				)}
			>
				<View style={styles.detailsContainer}>
					<Text style={styles.restaurantName}>{restaurant.name}</Text>
					<Text style={styles.restaurantDesctiption}>
						{restaurant.delivery} •{" "}
						{restaurant.tags.map(
							(tag, index) =>
								`${tag} ${index !== restaurant.tags.length - 1 ? ", " : ""}`
						)}
					</Text>
					<Text style={styles.restaurantDesctiption}>{restaurant.about}</Text>
					<SectionList
						contentContainerStyle={{ paddingBottom: 50 }}
						keyExtractor={(item, index) => `${item.id}${index}`}
						scrollEnabled={false}
						sections={DATA}
						ItemSeparatorComponent={() => (
							<View style={{ height: 1, backgroundColor: Colors.darkGrey }} />
						)}
						SectionSeparatorComponent={() => (
							<View style={{ height: 1, backgroundColor: Colors.darkGrey }} />
						)}
						renderItem={renderItems}
						renderSectionHeader={({ section: { title, index } }) => (
							<Text style={styles.sectionHeader}>{title}</Text>
						)}
					/>
				</View>
			</ParallaxScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	detailsContainer: {
		backgroundColor: Colors.lightGrey,
	},
	stickySection: {
		backgroundColor: "#fff",
		marginLeft: 70,
		height: 78,
		justifyContent: "flex-end",
	},
	roundButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
	bar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
	},
	stickySectionText: {
		color: "#000000",
		fontSize: 24,
		margin: 10,
		fontWeight: "bold",
	},
	restaurantName: {
		fontSize: 30,
		margin: 16,
	},
	restaurantDesctiption: {
		fontSize: 16,
		margin: 16,
		lineHeight: 22,
		color: "#000000af",
	},
	sectionHeader: {
		fontSize: 22,
		fontWeight: "bold",
		marginTop: 16,
		margin: 16,
	},
	item: {
		backgroundColor: "#fff",
		padding: 20,
		flexDirection: "row",
	},
});

export default Details;
