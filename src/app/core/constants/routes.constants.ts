import { ABOUT_TITLE, CONTACT_TITLE, HOME_TITLE, PRODUCTS_TITLE } from './page-titles.constants'

export const HOME_ROUTE = 'home'
export const ABOUT_ROUTE = 'about'
export const PRODUCTS_ROUTE = 'products'
export const PRODUCT_DETAILS_ROUTE = 'products/:id'
export const CONTACT_ROUTE = 'contact'
export const PAGE_NOT_FOUND_ROUTE = '**'

export const NAVIGATION_ROUTES = [
    {
        route: HOME_ROUTE,
        label: HOME_TITLE,
    },
    {
        route: ABOUT_ROUTE,
        label: ABOUT_TITLE,
    },
    {
        route: PRODUCTS_ROUTE,
        label: PRODUCTS_TITLE,
    },
    {
        route: CONTACT_ROUTE,
        label: CONTACT_TITLE,
    },
]
