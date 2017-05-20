import { Injectable } from '@angular/core';
import { REVIEWS } from "app/data/fake-data";
import { IReview } from "app/shared/models/models";

@Injectable()
export class ReviewsService {

  constructor() { }

  /**
   * Get the first review of a product if exist
   */
  public getFirstReview(product_id: number):IReview {
    return REVIEWS.find(review => (review.productId === product_id));
  }

  /**
   * Get all reviews of a product 
   */
  public getAll(product_id):IReview[]{
    return REVIEWS.filter(review => (review.productId === product_id));
  }

  /**
   * Get the average rating for a product
   */
  public getAverageRating(product_id):number{
    let average = 0;
    const all = this.getAll(product_id);
    all.forEach(el => {
      average += el.ratings;
    });
    average = average / all.length;
    const roundAverage = Math.floor(average);
    if(average > roundAverage){
      return roundAverage + 0.5;
    }
    return average;
  }

}
