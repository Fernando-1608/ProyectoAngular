import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //primero se obtiene o se muestra  el id del producto de current route
    const routeParmas = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParmas.get('productId'));

    //Find the product that correpond whith the id provided  in route

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
