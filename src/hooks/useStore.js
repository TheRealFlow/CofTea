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

	clearCart: () => {
		set(() => {
			return {
				cartProducts: [],
			};
		});
	},
}));

export default useStore;
