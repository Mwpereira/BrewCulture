import { Component } from '@angular/core'
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
    protected readonly faGithubAlt = faGithubAlt
    protected readonly faLinkedinIn = faLinkedinIn
    protected readonly faEnvelope = faEnvelope
}
