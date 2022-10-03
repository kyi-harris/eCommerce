import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private basUrl = "http://localhost:8080/api/products";

  constructor(private httpClient: HttpClient) {
  }

  getProductList(theCategoryId: number): Observable<Product[]> {
    // @TODO: need to build URL based on category id ... will come back to this!
    return this.httpClient.get<GetResponse>(this.basUrl).pipe(
      map(response => response._embedded.products)
    )
  };

}


interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
