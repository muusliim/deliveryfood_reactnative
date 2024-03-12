export const getDishById = (id: number) => {
	const meals = restaurant.food.flatMap((category) => category.meals);
	return meals.find((meal) => meal.id === id);
};
export const restaurant = {
	name: "Vapiano",
	rating: "4.5 Excellent",
	ratings: "(500+)",
	img: require("@/assets/data/r1.jpeg"),
	distance: "в 1 км отсюда",
	delivery: "10-20 мин",
	tags: [
		"Итальянская",
		"Пицца",
		"Паста",
		"Салаты",
		"Вегетарианская",
		"Алкоголь",
		"Вино",
		"Веганская кухня",
	],
	about:
		"Дом свежей пасты ручной работы, пиццы с тонкой корочкой, салатов, а также домашних соусов и заправок. Выбирайте форму пасты и добавляйте любые дополнения.",
	food: [
		{
			category: "Meal Deals",
			meals: [
				{
					id: 1,
					name: "Pasta Power ✊",
					price: 17,
					info: "Включает один чесночный хлеб, одну пасту и один безалкогольный напиток.",
					img: require("@/assets/data/1.png"),
				},
				{
					id: 2,
					name: "Vegetariano 💚",
					price: 17,
					info: "Включает один чесночный хлеб, одну вегетарианскую пасту и один безалкогольный напиток",
					img: require("@/assets/data/2.png"),
				},
				{
					id: 3,
					name: "Vaps Date 💕",
					price: 40,
					info: "Включает один чесночный хлеб с сыром или без, две пиццы на выбор, одну бутылку вина или четыре бутылки Moretti",
					img: require("@/assets/data/3.png"),
				},
				{
					id: 4,
					name: "Livin' your best life 😎",
					price: 80,
					info: "Включает два чесночных хлеба с сыром или без, четыре пиццы, две бутылки вина или восемь бутылок пива, а также сочетание того и другого.",
					img: require("@/assets/data/4.png"),
				},
			],
		},
		{
			category: "Паста",
			meals: [
				{
					id: 5,
					name: "Arrabbiata",
					price: 9.35,
					info: "Томатный соус, чили, чеснок и лук",
					img: require("@/assets/data/5.png"),
				},
				{
					id: 6,
					name: "Pomodoro e Mozzarella",
					price: 10.75,
					info: "Томатный соус, лук, моцарелла",
					img: require("@/assets/data/6.png"),
				},
			],
		},
		{
			category: "Пицца",
			meals: [
				{
					id: 7,
					name: "Salame",
					price: 11.35,
					info: "Острая итальянская колбаса, томатный соус, моцарелла",
					img: require("@/assets/data/7.png"),
				},
				{
					id: 8,
					name: "Margherity",
					price: 9.75,
					info: "Томатный соус, моцарелла",
					img: require("@/assets/data/8.png"),
				},
			],
		},
		{
			category: "Салаты",
			meals: [
				{
					id: 9,
					name: "Insalata Mista Piccola",
					price: 5.99,
					info: "Салат из листьев микс, помидоры черри и тертая морковь. Замены не допускаются, если вы хотите добавить какие-либо дополнения, пожалуйста, укажите их ниже..",
					img: require("@/assets/data/9.png"),
				},
				{
					id: 10,
					name: "Insalata Mista della Casa",
					price: 8.95,
					info: "Большой смешанный салат. Замены не допускаются, если вы хотите добавить какие-либо дополнения, пожалуйста, укажите их ниже.",
					img: require("@/assets/data/10.png"),
				},
			],
		},
		{
			category: "Meal Deals",
			meals: [
				{
					id: 1,
					name: "Pasta Power ✊",
					price: 17,
					info: "Включает один чесночный хлеб, одну пасту и один безалкогольный напиток.",
					img: require("@/assets/data/1.png"),
				},
				{
					id: 2,
					name: "Vegetariano 💚",
					price: 17,
					info: "Включает один чесночный хлеб, одну вегетарианскую пасту и один безалкогольный напиток",
					img: require("@/assets/data/2.png"),
				},
				{
					id: 3,
					name: "Vaps Date 💕",
					price: 40,
					info: "Включает один чесночный хлеб с сыром или без, две пиццы на выбор, одну бутылку вина или четыре бутылки Moretti",
					img: require("@/assets/data/3.png"),
				},
				{
					id: 4,
					name: "Livin' your best life 😎",
					price: 80,
					info: "Включает два чесночных хлеба с сыром или без, четыре пиццы, две бутылки вина или восемь бутылок пива, а также сочетание того и другого.",
					img: require("@/assets/data/4.png"),
				},
			],
		},
		{
			category: "Паста",
			meals: [
				{
					id: 5,
					name: "Arrabbiata",
					price: 9.35,
					info: "Tomato sauce, chilli, garlic, and onions",
					img: require("@/assets/data/5.png"),
				},
				{
					id: 6,
					name: "Pomodoro e Mozzarella",
					price: 10.75,
					info: "Tomato sauce, onions, mozzarella",
					img: require("@/assets/data/6.png"),
				},
			],
		},
		{
			category: "Pizza",
			meals: [
				{
					id: 7,
					name: "Salame",
					price: 11.35,
					info: "Spicy Italian sausage, tomato sauce, mozzarella",
					img: require("@/assets/data/7.png"),
				},
				{
					id: 8,
					name: "Margherity",
					price: 9.75,
					info: "Tomato sauce, mozzarella",
					img: require("@/assets/data/8.png"),
				},
			],
		},
		{
			category: "Salad",
			meals: [
				{
					id: 9,
					name: "Insalata Mista Piccola",
					price: 5.99,
					info: "Mixed leaf salad, cherry tomatoes and grated carrot. There can be no swaps, if you would like to add any extras please customise below.",
					img: require("@/assets/data/9.png"),
				},
				{
					id: 10,
					name: "Insalata Mista della Casa",
					price: 8.95,
					info: "Large mixed salad. There can be no swaps, if you would like to add any extras please customise below.",
					img: require("@/assets/data/10.png"),
				},
			],
		},
	],
};
