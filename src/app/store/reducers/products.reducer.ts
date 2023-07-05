import { createReducer, on } from '@ngrx/store'
import { Coffee } from '../../core/interfaces/coffee'
import {
    getPage,
    getProducts,
    getProductsFailure,
    getProductsSuccess,
    nextPage,
    previousPage,
    refreshProducts,
    setPage,
} from '../actions/products.actions'

export interface ProductsState {
    page: number
    products: Coffee[]
    loading: boolean
    error: string | null
}

const initialState: ProductsState = {
    page: 1,
    products: [],
    loading: false,
    error: null,
}

export const productsReducer = createReducer(
    initialState,
    on(getPage, (state) => ({
        ...state,
    })),
    on(previousPage, (state) => ({
        ...state,
    })),
    on(nextPage, (state) => ({
        ...state,
    })),
    on(setPage, (state, { page }) => ({
        ...state,
        page: page,
    })),
    on(getProducts, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(getProductsSuccess, (state, { products }) => ({
        ...state,
        products: [...products],
        loading: false,
        error: null,
    })),
    on(getProductsFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    })),
    on(refreshProducts, (state) => ({
        ...state,
    })),
)
