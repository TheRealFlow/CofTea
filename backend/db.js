import {nanoid} from 'nanoid';

export const products = [
	{
		id: nanoid(),
		category: 'coffee',
		name: 'Cafe Crema',
		description:
			'The "Cafe Crema" is a typical Swiss coffee drink, which is prepared like an ordinary Espresso. The difference lies in the amount of water, which in the case of Coffee Crema corresponds to the amount of a normal cup of Coffee (120 - 130 ml).',
		alt: 'Photo of a Cafe Crema',
		price: 4.5,
		imgUrl: 'https://images.unsplash.com/photo-1506372023823-741c83b836fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		quantity: 0,
	},
	{
		id: nanoid(),
		category: 'tea',
		name: 'Green Tea',
		description:
			'Mild, slightly grassy and bitter Tea - The infusion times of the tea are different, so all our hot tea drinks are served to the table as a bag, together with a cup of hot filtered water ( about 80°C & 250 ml ). ',
		alt: 'Photo of a Green Tea',
		price: 3.9,
		imgUrl: 'https://images.unsplash.com/photo-1606377695906-236fdfcef767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
		quantity: 0,
	},
	{
		id: nanoid(),
		category: 'coffee',
		name: 'Latte Macchiato',
		description:
			'The largest part of a Latte Macchiato consists of hot and frothed Milk. For a Latte Macchiato 180 to 200 ml of Milk is used. To this is added a freshly brewed Espresso (25 - 30 ml).',
		alt: 'Photo of a Latte Macchiato',
		price: 4.9,
		imgUrl: 'https://images.unsplash.com/photo-1599398054066-846f28917f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		quantity: 0,
	},
	{
		id: nanoid(),
		category: 'tea',
		name: 'Black Tea',
		description:
			'Strong, pleasantly bitter and aromatic Tea - The infusion times of the tea are different, so all our hot tea drinks are served to the table as a bag, together with a cup of hot filtered water ( about 80°C & 250 ml ). ',
		alt: 'Photo of a Black Tea',
		price: 3.9,
		imgUrl: 'https://images.unsplash.com/photo-1627828094454-accc9a7c20e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		quantity: 0,
	},
	{
		id: nanoid(),
		category: 'coffee',
		name: 'Espresso',
		description:
			'An Espresso is a Coffee in which Water (25 - 30 ml) is pressed at high pressure through very finely ground Coffee. The process produces a very strong Coffee, on which there is a dense, golden-brown layer of foam - the Crema - which contributes significantly to the aroma.',
		alt: 'Photo of a Espresso',
		price: 4.0,
		imgUrl: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		quantity: 0,
	},
	{
		id: nanoid(),
		category: 'tea',
		name: 'Rooibos Tea',
		description:
			'Fruity, slightly sweet Tea - The infusion times of the tea are different, so all our hot tea drinks are served to the table as a bag, together with a cup of hot filtered water ( about 80°C & 250 ml ). ',
		alt: 'Photo of a Rooibos Tea',
		price: 3.9,
		imgUrl: 'https://images.unsplash.com/photo-1597318181412-49af291f617f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		quantity: 0,
	},
	{
		id: nanoid(),
		category: 'coffee',
		name: 'Black Coffee',
		description:
			'A Black Coffee is an infusion drink and refers to a form of coffee preparation. Coffeepowder is brewed with boiling Water (120 - 130 ml) and filtered with a special Filter.',
		alt: 'Photo of a Black Coffee',
		price: 3.5,
		imgUrl: 'https://images.unsplash.com/photo-1621267860478-dbdd589372db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		quantity: 0,
	},
	{
		id: nanoid(),
		category: 'tea',
		name: 'Earl Grey Tea',
		description:
			'Gentle Tea with a strong citrus note (served with Milk). - The infusion times of the tea are different, so all our hot tea drinks are served to the table as a bag, together with a cup of hot filtered water ( about 80°C & 250 ml ). ',
		alt: 'Photo of a Earl Grey Tea',
		price: 4.1,
		imgUrl: 'https://images.unsplash.com/photo-1522520788364-9eafb7a93216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		quantity: 0,
	},
	{
		id: nanoid(),
		category: 'coffee',
		name: 'Iced Mocha',
		description:
			'An Iced Mocha is made with 20 ml Chocolate Sauce, 80 ml brewed Coffee, 80 ml Milk, and 20ml whipped Cream on top. Served in a tall glass with ice cubes',
		alt: 'Photo of a Iced Mocha',
		price: 5.2,
		imgUrl: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		quantity: 0,
	},
	{
		id: nanoid(),
		category: 'tea',
		name: 'Iced Tea - Lime',
		description:
			'A cooled Lime-Mint-Tea filled to about 350ml. Served in a tall glass with ice cubes',
		alt: 'Photo of a Iced Tea - Lime',
		price: 4.2,
		imgUrl: 'https://images.unsplash.com/photo-1501199532894-9449c0a85a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		quantity: 0,
	},
];
