import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { ProductsState } from '../../../store/reducers/products.reducer'
import { getLoading } from '../../../store/selectors/products.selectors'

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
    isLoading: Observable<boolean> = this.store.select(getLoading)

    constructor(private store: Store<ProductsState>) {}
}
