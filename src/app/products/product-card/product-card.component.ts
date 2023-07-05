import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { PRODUCTS_ROUTE } from '../../core/constants/routes.constants'

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
    sampleImagePath = 'assets/images/sample_images/coffee-bag-'

    @Input() coffee: any

    constructor(private router: Router) {}

    async navigateToProductDetails(id: string): Promise<void> {
        await this.router.navigate([`${PRODUCTS_ROUTE}/${id}`], { state: { productUid: id } }).then(() => {
            window.scrollTo(0, 0) // Scroll to top of page
        })
    }
}
