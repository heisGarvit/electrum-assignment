import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductQuotes} from "../../models/products.model";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() productQuote: ProductQuotes | undefined;
  @Output() navigated = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
