import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductsQuotesApi} from "../models/products.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  async getProductQuotes(): Promise<any> {
    const response = await this.http.get<ProductsQuotesApi>(environment.serverEndpoint + 'quote').toPromise();
    return response.data.quotes.product_quotes;
  }


}
