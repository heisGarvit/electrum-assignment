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
  @Output() closed = new EventEmitter<boolean>();

  images = [
    'assets/images/img1.png',
    'assets/images/img1.png',
    'assets/images/img1.png',
    'assets/images/img1.png',
  ];
  selectedImageIndex = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
