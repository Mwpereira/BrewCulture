import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Coffee } from '../../core/interfaces/coffee'
import { ProductsState } from '../../store/reducers/products.reducer'

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    protected readonly Object = Object

    @Input() products$!: Observable<Coffee[]>

    constructor(private store: Store<{ products: ProductsState }>) {}
}
