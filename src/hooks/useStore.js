import create from 'zustand';

const useStore = create(set => ({
	cartProducts: [],
	count: 0,
	addToCart: id => {
		set(state => {
			return {
				cartProducts: [...state.cartProducts, id],
			};
		});
	},
	addCount: () => {
		set(state => ({count: state.count + 1}));
	},
	minusCount: () => {
		set(state => ({count: state.count - 1}));
	},

	deleteFromCart: id => {
		set(state => {
			return {
				cartProducts: state.cartProducts.filter(cartProduct => cartProduct.id !== id),
			};
		});
	},

	clearCart: () => {
		set(() => {
			return {
				cartProducts: [],
			};
		});
	},
}));

export default useStore;
