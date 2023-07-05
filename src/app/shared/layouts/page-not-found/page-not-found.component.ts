import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { PAGE_NOT_FOUND_TITLE } from '../../../core/constants/page-titles.constants'
import { HOME_ROUTE } from '../../../core/constants/routes.constants'
import { generatePageTitle } from '../../../core/utils/website.utils'

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
    imagePath = 'assets/images/404.jpg'

    constructor(private router: Router, private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle(generatePageTitle(PAGE_NOT_FOUND_TITLE))
    }

    async navigateToHomePage(): Promise<void> {
        await this.router.navigate([HOME_ROUTE])
    }
}
