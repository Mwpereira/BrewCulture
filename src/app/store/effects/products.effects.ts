import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store, select } from '@ngrx/store'
import { from, of, tap } from 'rxjs'
import { catchError, filter, map, mergeMap, withLatestFrom } from 'rxjs/operators'
import { PAGES } from '../../core/constants/products.constants'
import { Coffee } from '../../core/interfaces/coffee'
import { ProductsService } from '../../shared/services/products.service'
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

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private productService: ProductsService, private store: Store) {}

    getPage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getPage),
            withLatestFrom(this.store.pipe(select((state: any) => state.page))),
            map(([action, page]) => {
                // Return the page number directly
                return page
            }),
        ),
    )

    previousPage$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(previousPage),
                withLatestFrom(this.store.pipe(select((state: any) => state))),
                tap(([action, state]) => {
                    const productsStore = state.products
                    const currentPage = productsStore.page

                    if (currentPage === 1) {
                        return
                    } else {
                        this.store.dispatch(setPage({ page: currentPage - 1 }))
                    }
                }),
            ),
        { dispatch: false },
    )

    nextPage$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(nextPage),
                withLatestFrom(this.store.pipe(select((state: any) => state))),
                tap(([action, state]) => {
                    const productsStore = state.products
                    const currentPage = productsStore.page

                    if (currentPage === PAGES) {
                        return
                    } else {
                        this.store.dispatch(setPage({ page: currentPage + 1 }))
                    }
                }),
            ),
        { dispatch: false },
    )

    getProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getProducts),
            withLatestFrom(this.store.pipe(select((state: any) => state))),
            filter(([action, state]) => {
                const productsStore = state.products
                const { products } = productsStore

                // Check the length of the products array
                return products.length === 0
            }),
            mergeMap(() =>
                from(this.productService.getProducts()).pipe(
                    map((products: Coffee[]) => getProductsSuccess({ products })),
                    catchError((error) => of(getProductsFailure({ error: error.message }))),
                ),
            ),
        ),
    )

    refreshProducts$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(refreshProducts),
                withLatestFrom(this.store.pipe(select((state: any) => state))),
                tap(([action, state]) => {
                    const emptyArray: Coffee[] = []
                    this.store.dispatch(getProductsSuccess({ products: emptyArray }))
                }),
                catchError((error) => of(getProductsFailure({ error: error.message }))),
            ),
        { dispatch: false },
    )
}
