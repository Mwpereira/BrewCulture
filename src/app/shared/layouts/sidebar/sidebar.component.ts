import { Component, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router'
import { NAVIGATION_ROUTES } from '../../../core/constants/routes.constants'

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
    protected readonly NAVIGATION_ROUTES = NAVIGATION_ROUTES

    @Output() closeSidebar = new EventEmitter<string>()

    constructor(private router: Router) {}

    async navigateToPage(page: string): Promise<void> {
        await this.router.navigate([page])
        this.closeSidebar.emit()
    }

    isCurrentPageHover(route: string): boolean {
        return window.location.pathname.indexOf(`/${route}`) === 0
    }

    isCurrentPageSelected(route: string): boolean {
        return window.location.pathname.indexOf(`/${route}`) === 0
    }
}
