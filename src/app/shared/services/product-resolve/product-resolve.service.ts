import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ProductDataService } from "app/shared/services/product-data/product-data.service";

/**
 * Returns an IProduct object using the 'id' param of the route
 */
@Injectable()
export class ProductResolveService implements Resolve<any> {

  constructor(private productService: ProductDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    /**
     * Ensure the router will continue after the first change emit, 
     * and won't wait for the observable to close.
     */
    return this.productService.getProduct(route.paramMap.get('id')).first();
  }

}
