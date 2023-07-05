import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ProductsState } from '../reducers/products.reducer'

export const getLoadingState = createFeatureSelector<ProductsState>('loading')

export const getLoading = createSelector(getLoadingState, (state) => {
    return state.loading
})

export const getPageState = createFeatureSelector<ProductsState>('products')

export const getPage = createSelector(getPageState, (state) => {
    // Retrieve the current page
    return state.page
})

export const getProductsState = createFeatureSelector<ProductsState>('products')

export const getProductsSelector = createSelector(getProductsState, (state) => {
    // Array of products
    return state.products
})

export const getProductsSlice = createSelector(getProductsState, (state) => {
    const itemsPerPage = 10 // Number of items to display per page
    const productsArray = state.products // Array of products
    const page = state.page // Page number (1, 2, 3, 4, 5, etc.)

    // Calculate the starting and ending indices for the current page
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = page * itemsPerPage

    return productsArray.slice(startIndex, endIndex)
})
