import { Component } from '@angular/core'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { scrollToTop } from 'src/app/core/utils/website.utils'
import { PAGES } from '../../core/constants/products.constants'
import { nextPage, previousPage } from '../../store/actions/products.actions'
import { ProductsState } from '../../store/reducers/products.reducer'
import { getPage } from '../../store/selectors/products.selectors'

@Component({
    selector: 'app-pagination-buttons',
    templateUrl: './pagination-buttons.component.html',
    styleUrls: ['./pagination-buttons.component.css'],
})
export class PaginationButtonsComponent {
    protected readonly faChevronLeft = faChevronLeft
    protected readonly faChevronRight = faChevronRight

    page$: Observable<number> = this.store.select(getPage)

    constructor(private store: Store<{ products: ProductsState }>) {}

    currentPage(): number {
        let page = -1
        this.page$.subscribe((currentPage) => {
            page = currentPage
        })
        return page
    }

    previousPage(): void {
        if (this.currentPage() > 1) {
            this.store.dispatch(previousPage())
        }
        scrollToTop()
    }

    nextPage(): void {
        if (this.currentPage() < PAGES) {
            this.store.dispatch(nextPage())
        }
        scrollToTop()
    }

    top(): boolean {
        return this.currentPage() === 1
    }

    bottom(): boolean {
        return this.currentPage() === PAGES
    }
}
