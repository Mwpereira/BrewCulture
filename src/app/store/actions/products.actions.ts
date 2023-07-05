import { createAction, props } from '@ngrx/store'
import { Coffee } from '../../core/interfaces/coffee'
import {
    GET_PAGE,
    GET_PRODUCTS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS,
    NEXT_PAGE,
    PREVIOUS_PAGE,
    REFRESH_PRODUCTS,
    SET_PAGE,
} from '../constants/products.constants'

export const getPage = createAction(GET_PAGE)
export const previousPage = createAction(PREVIOUS_PAGE)
export const nextPage = createAction(NEXT_PAGE)
export const setPage = createAction(SET_PAGE, props<{ page: number }>())

export const getProducts = createAction(GET_PRODUCTS)
export const getProductsSuccess = createAction(GET_PRODUCTS_SUCCESS, props<{ products: Coffee[] }>())
export const getProductsFailure = createAction(GET_PRODUCTS_FAILURE, props<{ error: string }>())
export const refreshProducts = createAction(REFRESH_PRODUCTS)
