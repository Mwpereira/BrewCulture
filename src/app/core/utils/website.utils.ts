import { Router } from '@angular/router'

// Sets the page title for the website based on the page name
export const generatePageTitle = (page: string): string => {
    return `BrewCulture | ${page}`
}

// Navigates to the specified page and scrolls to the top of the page
export const navigateToPage = async (router: Router, page: string): Promise<void> => {
    await router.navigate([page]).then(() => {
        scrollToTop()
    })
}

// Scrolls to the top of the page
export const scrollToTop = (): void => {
    window.scrollTo(0, 0) // Scroll to top of page
}
