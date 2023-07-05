import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, catchError, throwError } from 'rxjs'
import { environment } from '../../../environments/environment.production'
import { TOTAL_ITEMS } from '../constants/products.constants'
import { Coffee } from '../interfaces/coffee'

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private API_URL = environment.API_URL // URL to random data api

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
    }
    constructor(private http: HttpClient) {}

    private formatErrors(error: any) {
        return throwError(error.error)
    }

    // GET list of coffee products
    getCoffees(): Observable<Coffee[]> {
        return this.http.get<Coffee[]>(`${this.API_URL}?size=${TOTAL_ITEMS}`).pipe(catchError(this.formatErrors))
    }
}
