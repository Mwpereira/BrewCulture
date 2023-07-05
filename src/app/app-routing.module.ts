import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import {
    ABOUT_ROUTE,
    CONTACT_ROUTE,
    HOME_ROUTE,
    PAGE_NOT_FOUND_ROUTE,
    PRODUCTS_ROUTE,
    PRODUCT_DETAILS_ROUTE,
} from './core/constants/routes.constants'
import { HomeComponent } from './home/home.component'
import { ProductDetailsComponent } from './products/product-details/product-details.component'
import { ProductsComponent } from './products/products.component'
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component'

const routes: Routes = [
    { path: '', redirectTo: HOME_ROUTE, pathMatch: 'full' },
    { path: HOME_ROUTE, component: HomeComponent },
    { path: PRODUCTS_ROUTE, component: ProductsComponent },
    { path: PRODUCT_DETAILS_ROUTE, component: ProductDetailsComponent },
    { path: ABOUT_ROUTE, component: AboutComponent },
    { path: CONTACT_ROUTE, component: ContactComponent },
    { path: PAGE_NOT_FOUND_ROUTE, component: PageNotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
