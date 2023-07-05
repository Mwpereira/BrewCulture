import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Coffee } from '../../core/interfaces/coffee'
import { ProductsState } from '../../store/reducers/products.reducer'
import { getProducts } from '../../store/selectors/products.selectors'

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    protected readonly Object = Object

    products$: Observable<Coffee[]> = this.store.select(getProducts)

    constructor(private store: Store<{ products: ProductsState }>) {}
}
