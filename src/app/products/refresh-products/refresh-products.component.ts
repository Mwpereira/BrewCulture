import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { faRefresh } from '@fortawesome/free-solid-svg-icons/faRefresh'
import { Store } from '@ngrx/store'
import { PRODUCTS_ROUTE } from '../../core/constants/routes.constants'
import { navigateToPage } from '../../core/utils/website.utils'
import { getProducts, refreshProducts, setPage } from '../../store/actions/products.actions'

@Component({
    selector: 'app-refresh-products',
    templateUrl: './refresh-products.component.html',
    styleUrls: ['./refresh-products.component.css'],
})
export class RefreshProductsComponent {
    protected readonly faRefresh = faRefresh

    constructor(public router: Router, private store: Store) {}

    async refreshProductsList(): Promise<void> {
        this.store.dispatch(refreshProducts())
        await navigateToPage(this.router, PRODUCTS_ROUTE)
        this.store.dispatch(getProducts())
        this.store.dispatch(setPage({ page: 1 }))
    }
}
