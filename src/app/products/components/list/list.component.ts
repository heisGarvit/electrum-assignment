import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ProductQuotes} from "../../models/products.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  productQuotes: ProductQuotes[] | undefined;
  selectedProductID: string | undefined;
  selectedProductQuote: ProductQuotes | undefined;

  volumeSelected = 50;

  constructor(
    private products: ProductsService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.initData().then();
    this.activatedRoute.params.subscribe(params => {
      this.selectedProductID = params['id'];
    });
  }

  async initData(): Promise<any> {
    this.productQuotes = await this.products.getProductQuotes();

    if (this.selectedProductID) {
      this.productQuotes?.forEach(quote => {
        if ('' + quote.model_id === this.selectedProductID) {
          this.selectedProductQuote = quote;
          console.log(this.selectedProductQuote);
          return;
        }
      });
    }

  }




}
