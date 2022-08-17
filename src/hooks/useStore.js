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
}));

export default useStore;
