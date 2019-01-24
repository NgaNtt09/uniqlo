import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Product } from '../product';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.getProducts();
  }
  products: Product[];
  getProducts():void{
    this.shopService.getProducts().subscribe(products=>this.products=products);
  }

}
