import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  productsUrl: string = 'https://gist.githubusercontent.com/bharadwajturlapati/4e81154dbcc7d6928921b96057fc5b4a/raw/d31da32d6e5c1dd2a11968d7e94d3c60dfd50fcb/products.json';
  
  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<any>{
    return this.http.get(this.productsUrl).pipe(
    catchError((err: HttpErrorResponse) => {
      return throwError("Error while fetching products");
    }));
  }
}
