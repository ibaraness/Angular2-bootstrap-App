import { Component, OnInit } from '@angular/core';
import { IProduct, IReview } from "app/shared/models/models";
import { ActivatedRoute } from "@angular/router";
import { ReviewsService } from "app/shared/reviews.service";
import { REVIEWS } from "app/data/fake-data";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  private product: IProduct;
  private reviews: IReview[];

  constructor(private route: ActivatedRoute, private reviewsService: ReviewsService) { }

  ngOnInit() {
    /**
     * Grab IStory object from resolve
     */
    this.product = this.route.snapshot.data['product'];

    if(this.product){
      /**
       * Get 3 first reviews for that specific product
       */
      this.reviews = this.reviewsService.getAll(this.product.id);
      if(this.reviews && this.reviews.length > 3){
        this.reviews = this.reviews.slice(0,3);
      }

      let average = this.reviewsService.getAverageRating(this.product.id);
      console.log("average", average);
    }
  }

}
