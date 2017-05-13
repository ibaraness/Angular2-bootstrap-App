import { Component, OnInit, Input } from '@angular/core';

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  rating: number; //0 out of 5 (halfs allowd, for example 3.5)
  reviews: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() private product: IProduct = {
    id:1,
    title:'Picture',
    description:`This picture is the best, only <strong>$1.99</strong> for a copy`,
    price: 1.99,
    imageURL: '/assets/images/img3.jpg',
    rating:5,
    reviews:1
  }

  private ratings: number[];

  constructor() { }

  ngOnInit() {
    this.prepareRatings();
    console.log('ratings', this.ratings);
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
