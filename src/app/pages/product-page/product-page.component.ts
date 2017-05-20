import { Component, OnInit } from '@angular/core';
import { IProduct, IReview } from "app/shared/models/models";
import { ActivatedRoute } from "@angular/router";
import { ReviewsService } from "app/shared/services/reviews-service/reviews.service";
import { REVIEWS } from "app/data/fake-data";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  private product: IProduct;
  private reviews: IReview[];
  private showingAllReviews: boolean;
  private hasMoreThanThreeReviews = false;

  constructor(private route: ActivatedRoute, private reviewsService: ReviewsService) { }

  ngOnInit() {
    /**
     * Grab IStory object from resolve
     */
    this.route.data.forEach(data => {
      this.product = data['product'];
      
      /**
       * Get 3 first reviews for that specific product
       */
      this.showFirstThreeReviews();
    })
  }

  /**
   * Get 3 first reviews for that specific product
   */
  private showFirstThreeReviews(): void {
      if(this.product){     
        this.reviews = this.reviewsService.getAll(this.product.id);
        if(this.reviews && this.reviews.length > 3){
          this.reviews = this.reviews.slice(0,3);
          this.hasMoreThanThreeReviews = true;
          this.showingAllReviews = false;
        } 
      }
  }

  /**
   * Get All reviews for that specific product
   */
  private showAllReviews(): void {
      if(this.product){     
        this.reviews = this.reviewsService.getAll(this.product.id);
        this.showingAllReviews = true;
      }
  }

}
