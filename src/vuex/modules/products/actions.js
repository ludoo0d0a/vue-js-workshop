import uuid from 'uuid';
//import { $http } from 'vue'
import Vue from 'vue'

import {
    FETCH_PRODUCTS,
    DELETE_PRODUCT,
    CREATE_PRODUCT,
    UPDATE_PRODUCT
} from './mutation-types';

export function fetchProducts({ commit }) {
    return Vue.http.get('products/')
        .then((response) => commit(FETCH_PRODUCTS, response.body.data))
}

export function createProduct({ commit }, product) {
    return http.post('products', product)
        .then((response) => commit(CREATE_PRODUCT, response.body.data))
}

export function updateProduct({ commit }, product) {
    return http.put(`products/${product.id}`, product)
        .then((response) => commit(UPDATE_PRODUCT, response.body.data))
}

// export function deleteProduct({ commit }, productId) {
//     commit(DELETE_PRODUCT, productId)
// }
export function deleteProduct({ commit }, productId) {
    return http.delete(`products/${productId}`)
        .then((response) => commit(DELETE_PRODUCT, productId))
}

// export function saveProduct({ commit, state }, product) {
//     const index = state.all.findIndex((p) => p.id === product.id);
//     // update product if it exists or create it if it doesn't
//     if (index !== -1) {
//         commit(UPDATE_PRODUCT, product)
//     } else {
//         product.id = uuid.v4();
//         commit(CREATE_PRODUCT, product)
//     }
// }
export function saveProduct({ commit, state }, product) {
    const index = state.all.findIndex((p) => p.id === product.id);

    // update product if it exists or create it if it doesn't
    if (index !== -1) {
        return updateProduct({ commit }, product)
    } else {
        return createProduct({ commit }, product)
    }
}