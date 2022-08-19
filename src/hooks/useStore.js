import create from 'zustand';

const useStore = create(set => ({
	cartProducts: [],
	addToCart: name => {
		set(state => {
			return {
				cartProducts: [...state.cartProducts, name],
			};
		});
	},

	deleteFromCart: id => {
		set(state => {
			return {
				cartProducts: state.cartProducts.filter(cartProduct => cartProduct.id !== id),
			};
		});
	},

	filterCoffee: category => {
		set(state => {
			return {
				coffeeCards: state.coffeeCards.filter(
					coffeeCard => coffeeCard.category !== category
				),
			};
		});
	},
}));

export default useStore;
