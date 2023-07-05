import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RefreshProductsComponent } from './refresh-products.component'

describe('RefreshProductsComponent', () => {
    let component: RefreshProductsComponent
    let fixture: ComponentFixture<RefreshProductsComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RefreshProductsComponent],
        })
        fixture = TestBed.createComponent(RefreshProductsComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
