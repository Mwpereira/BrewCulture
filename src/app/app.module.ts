import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { NgOptimizedImage } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AboutComponent } from './about/about.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component'
import { PaginationButtonsComponent } from './products/pagination-buttons/pagination-buttons.component'
import { ProductCardComponent } from './products/product-card/product-card.component'
import { ProductDetailsComponent } from './products/product-details/product-details.component'
import { ProductsListComponent } from './products/products-list/products-list.component'
import { ProductsComponent } from './products/products.component'
import { RefreshProductsComponent } from './products/refresh-products/refresh-products.component'
import { FooterComponent } from './shared/layouts/footer/footer.component'
import { LoadingComponent } from './shared/layouts/loading/loading.component'
import { NavbarComponent } from './shared/layouts/navbar/navbar.component'
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component'
import { SidebarComponent } from './shared/layouts/sidebar/sidebar.component'
import { LogoComponent } from './shared/logo/logo.component'
import { ProductEffects } from './store/effects/products.effects'
import { localStorageSyncReducer } from './store/reducers/meta.reducer'
import { productsReducer } from './store/reducers/products.reducer'

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        NavbarComponent,
        LogoComponent,
        HomeComponent,
        AboutComponent,
        ProductsComponent,
        ContactComponent,
        PageNotFoundComponent,
        ProductsListComponent,
        ProductCardComponent,
        ProductDetailsComponent,
        PaginationButtonsComponent,
        LoadingComponent,
        SidebarComponent,
        RefreshProductsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        NgOptimizedImage,
        HttpClientModule,
        StoreModule.forRoot({ products: productsReducer }, { metaReducers: [localStorageSyncReducer] }),
        EffectsModule.forRoot([ProductEffects]),
        StoreDevtoolsModule.instrument(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
