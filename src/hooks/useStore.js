import create from 'zustand';

const useStore = create(set => ({
	cartProducts: [],
	addToCart: productInfo => {
		set(state => {
			return {
				cartProducts: [...state.cartProducts, {...productInfo, count: 1}],
			};
		});
	},
	addCount: id => {
		set(state => {
			return {
				cartProducts: state.cartProducts.map(cartProduct =>
					cartProduct.id === id
						? {...cartProduct, count: cartProduct.count + 1}
						: cartProduct
				),
			};
		});
	},
	minusCount: id => {
		set(state => {
			return {
				cartProducts: state.cartProducts.map(cartProduct =>
					cartProduct.id === id
						? {...cartProduct, count: cartProduct.count - 1}
						: cartProduct
				),
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
