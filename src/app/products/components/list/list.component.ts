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
  selectedProductQuoteIndex: number | undefined;
  selectedProductQuote: ProductQuotes | undefined;

  volumeSelected = 50;
  waterHeaterEmergencyOptions = [{label: 'No', value: false}, {label: 'Yes', value: true}];
  waterHeaterEmergency = true;
  selectedFamily = 'single-family';
  selectedFuel = 'natural-gas';

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
      this.productQuotes?.forEach((quote, index) => {
        if ('' + quote.model_id === this.selectedProductID) {
          this.selectedProductQuoteIndex = index;
          this.selectedProductQuote = quote;
          console.log(this.selectedProductQuote);
          return;
        }
      });
    }

  }


  navigatedOnPopUp(index: number) {

    if ( this.selectedProductQuoteIndex != undefined && this.productQuotes != undefined) {
      this.selectedProductQuoteIndex += index;
      if (this.selectedProductQuoteIndex >= this.productQuotes.length) {
        this.selectedProductQuoteIndex = 0
      } else if (this.selectedProductQuoteIndex < 0) {
        this.selectedProductQuoteIndex = this.productQuotes.length - 1;
      }
      this.selectedProductQuote = this.productQuotes[this.selectedProductQuoteIndex];
    }

  }

  popUpClosed() {
    this.selectedProductID=undefined;
    this.selectedProductQuote= undefined;
    this.selectedProductQuoteIndex = undefined
  }
}
