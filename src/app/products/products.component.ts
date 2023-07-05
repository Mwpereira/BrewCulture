import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Store } from '@ngrx/store'
import { PRODUCTS_TITLE } from '../core/constants/page-titles.constants'
import { generatePageTitle } from '../core/utils/website.utils'
import { getProducts } from '../store/actions/products.actions'

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
    protected readonly PRODUCTS_TITLE = PRODUCTS_TITLE

    constructor(private store: Store, private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle(generatePageTitle(PRODUCTS_TITLE))
        this.store.dispatch(getProducts())
    }
}
