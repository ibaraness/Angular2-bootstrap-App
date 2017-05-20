import { Component, OnInit, Input } from '@angular/core';
import { IReview } from "app/shared/models/models";
import { ReviewsService } from "app/shared/services/reviews-service/reviews.service";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() private review: IReview;
  private ratings: number[];

  constructor() { }

  ngOnInit() {

  }

}
