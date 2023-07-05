import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { NAVIGATION_ROUTES } from '../../../core/constants/routes.constants'
import { navigateToPage } from '../../../core/utils/website.utils'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
    protected readonly NAVIGATION_ROUTES = NAVIGATION_ROUTES

    sideBarMenuOpen = false

    constructor(public router: Router) {}

    isCurrentPageHover(route: string): boolean {
        return window.location.pathname.indexOf(`/${route}`) === 0
    }

    isCurrentPageSelected(route: string): boolean {
        return window.location.pathname.indexOf(`/${route}`) === 0
    }

    toggleSidebar() {
        this.sideBarMenuOpen = !this.sideBarMenuOpen
    }

    closeSidebar() {
        this.sideBarMenuOpen = false
    }

    protected readonly navigateToPage = navigateToPage
}
