import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { ABOUT_TITLE } from '../core/constants/page-titles.constants'
import { PRODUCTS_ROUTE } from '../core/constants/routes.constants'
import { generatePageTitle, navigateToPage } from '../core/utils/website.utils'

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    protected readonly ABOUT_TITLE = ABOUT_TITLE
    protected readonly navigateToPage = navigateToPage
    protected readonly PRODUCTS_ROUTE = PRODUCTS_ROUTE

    constructor(public router: Router, private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle(generatePageTitle(ABOUT_TITLE))
    }
}
