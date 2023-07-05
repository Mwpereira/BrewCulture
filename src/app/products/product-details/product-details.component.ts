import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { PRODUCTS_ROUTE } from '../../core/constants/routes.constants'
import { Coffee } from '../../core/interfaces/coffee'
import { generatePageTitle, navigateToPage } from '../../core/utils/website.utils'
import { ProductsState } from '../../store/reducers/products.reducer'
import { getProductsSelector } from '../../store/selectors/products.selectors'

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
    protected readonly faChevronLeft = faChevronLeft
    protected readonly Object = Object
    protected readonly PRODUCTS_ROUTE = PRODUCTS_ROUTE
    protected readonly navigateToPage = navigateToPage

    product!: Coffee | null
    products$: Observable<Coffee[]>
    sampleImagePath = 'assets/images/sample_images/coffee-bag-'

    constructor(public router: Router, private store: Store<{ products: ProductsState }>, private titleService: Title) {
        this.products$ = this.store.select(getProductsSelector)

        const data = history.state // Access the passed data
        const productUid = data.productUid // Retrieve only the product uid, so we can reference the store for up-to-date data

        this.products$.subscribe(async (products) => {
            this.product = products.find((obj) => obj.uid === productUid) || null
        })
    }

    ngOnInit(): void {
        this.titleService.setTitle(generatePageTitle(this.product?.blend_name || 'Product Details'))
    }
}
