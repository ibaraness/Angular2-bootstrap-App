import { Component, OnInit } from '@angular/core';

export interface IReview {
  productId: number;
  title: string;
  content: string;
  ratings: number //0-5 rating stars (halfs are allowed)
}



@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * In order to display 5 stars (full or empty) next to each product,
   * we need a 5 items array, where each item in it represent a star (full, half or empty star).
   * 
   * This method Takes a number between 0-5, and returns an array of numbers.
   *  - 1 represents a full star.
   *  - 0.5 represents an half full (or half empty) star.
   *  - 0 represents an empty star.
   */
  public getRatingsStarsArray(ratingNumber: number): void{
    /**
     * Prepare a 5 items array. our stars container
     */
    const stars = new Array(5);

    /**
     * Get a whole number version of the reviews, 
     * so that later we can extract half value (if exists)
     */
    const intRating = Math.floor(ratingNumber);

    /**
     * Get our half star (if exists), by substracting the whole ratings
     * value from the original one.
     */
    let halfs = ratingNumber - intRating;

    /**
     * Loop through the array and fill it with correct values
     */
    for(let i = 0, n = 1; i <= 4; i++, n++){
      if(n <= intRating){
        stars[i] = 1
      } else {
        stars[i] = halfs;
        halfs = +0;
      }
    }
  }

}
