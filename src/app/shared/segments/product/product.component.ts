import { Component, OnInit, Input } from '@angular/core';
import { ReviewsService } from "app/shared/services/reviews-service/reviews.service";
import { IProduct } from "app/shared/models/models";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  /**
   * Get IProduct object from the parent
   */
  @Input() private product: IProduct;

  private ratings: number[];

  constructor() { }

  ngOnInit() {

  }
}
