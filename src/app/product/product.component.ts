import { Component, OnInit, Input } from '@angular/core';
import { ShopService } from '../shop.service';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() title: string;
  constructor(private shopService: ShopService) { }
  products: Product[];
  getProducts(): void {
    this.shopService.getProducts().subscribe(products => this.products = products);
  }
  ngOnInit() {
    this.getProducts();
  }


}
