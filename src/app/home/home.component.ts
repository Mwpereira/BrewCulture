import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { HOME_TITLE } from '../core/constants/page-titles.constants'
import { generatePageTitle } from '../core/utils/website.utils'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    protected readonly HOME_TITLE = HOME_TITLE

    brewCulturePng = 'assets/images/brewculture.png'
    brewCultureWebp = 'assets/images/brewculture.webp'

    constructor(private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle(generatePageTitle(HOME_TITLE))
    }
}
