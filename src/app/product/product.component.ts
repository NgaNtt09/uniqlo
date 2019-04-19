import { Component, OnInit, Input } from '@angular/core';
import { ShopService } from '../shop.service';
import { Product } from '../product';
import { Title } from '../title';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() title: Title;
  products: Product[];

  ngOnInit() {
    this.getProducts();
    this.getTitleProduct();
  }

  constructor(private shopService: ShopService,
    private route: ActivatedRoute) { }

  getProducts(): void {
    this.shopService.getProducts().subscribe(products => this.products = products);
  }

  getTitleProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.shopService.getTitle(id).subscribe(title => this.title = title);
  }

}
