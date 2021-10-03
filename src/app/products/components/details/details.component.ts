import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductQuotes} from "../../models/products.model";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: []
})
export class DetailsComponent {

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
}
