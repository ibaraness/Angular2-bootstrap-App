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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /**
     * Grab IStory object from resolve
     */
    this.product = this.route.snapshot.data['product'];
  }

}
