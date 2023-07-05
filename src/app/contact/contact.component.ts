import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ABOUT_TITLE, CONTACT_TITLE } from '../core/constants/page-titles.constants'
import { generatePageTitle } from '../core/utils/website.utils'

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    protected readonly CONTACT_TITLE = CONTACT_TITLE
    protected readonly ABOUT_TITLE = ABOUT_TITLE

    imagePath = 'assets/images/contact_us.png'

    constructor(private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle(generatePageTitle(CONTACT_TITLE))
    }
}
