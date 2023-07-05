import { Injectable } from '@angular/core'
import { lastValueFrom } from 'rxjs'
import { TOTAL_SAMPLE_IMAGES } from 'src/app/core/constants/products.constants'
import { Coffee } from '../../core/interfaces/coffee'
import { ApiService } from '../../core/services/api.service'

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor(private apiService: ApiService) {}

    async getProducts(): Promise<Coffee[]> {
        const products = await lastValueFrom(this.apiService.getCoffees())


        return new Promise((resolve) => {

        products.forEach((product: Coffee) => {
            // Pick a random number to choose a sample image
            const randomNumber = Math.floor(Math.random() * TOTAL_SAMPLE_IMAGES)

            product.imgId = randomNumber + 1
        })

        resolve(products)
    })
    }
}