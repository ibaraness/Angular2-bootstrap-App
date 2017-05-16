import { Component, OnInit } from '@angular/core';
import { IProduct } from "app/shared/product/product.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  private product: IProduct;
  private ratings: number[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /**
     * Grab IStory object from resolve
     */
    this.product = this.route.snapshot.data['product'];
    this.prepareRatings();
  }

  /**
   * Prepare reviews array, so we can display the correct star icons of the product 
   */
  private prepareRatings(): void{
    //Get a whole number version of thew reviews
    const intRating = Math.floor(this.product.rating);

    //Check if we have any halfs, and save it
    let halfs = this.product.rating - intRating;

    this.ratings = [];
    for(let i = 1; i <= 5; i++){
      if(i <= intRating){
        this.ratings.push(1);
      } else {
        this.ratings.push(halfs);
        halfs = +0;
      }
    }
  }

}
