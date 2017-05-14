import { Injectable } from '@angular/core';
import { IProduct } from "app/shared/product/product.component";
import { PRODUCTS } from "app/data/fake-data";
import { Observable } from "rxjs/Observable";

/**
 * Product data manager
 */
@Injectable()
export class ProductDataService {
  
  /**
   * Add our fake-data stories list to our 'New Topics' section
   */
  private products: IProduct[] = PRODUCTS;

  constructor() { }

  /**
   * Simulate loading data from server by returning an Observable.
   */
  public getProduct(id:string):Observable<IProduct> {
    return new Observable<IProduct>(observer => {
      const product = this.products.find(story => (story.id === parseInt(id)));
      if(product){
        observer.next(product);
      } else {
        //TODO: Navigate to product not found
      }
      
    });
  }

}
