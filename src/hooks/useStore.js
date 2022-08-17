import create from 'zustand';

import {products} from '../backend/db';

export const useProducts = create(set => ({
	cart: [],
	addToCart: id =>
		set(state => {
			const isClicked = state.cart.find(products.id === id);
			if (!isClicked) {
				return {
					...state,
					cart: [...state.cart, {id}],
				};
			}
			const updateCart = state.cart.map(products =>
				products.id === id ? {...products} : products
			);
			return {
				...state,
				cart: updateCart,
			};
		}),
}));
