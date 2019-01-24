import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.scss']
})
export class InfoProductComponent implements OnInit {
  constructor(private service: ShopService,
    private route: ActivatedRoute, ) { }
  @Input() product: Product;

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getProduct(id).subscribe(product => this.product = product);
  }
  x: number;
  y: number;
  zoom(event: MouseEvent){
    var offsetX, offsetY;
    event.offsetX ? offsetX=event.offsetX : offsetX=event.pageX;
    event.offsetY ? offsetY=event.offsetY : offsetY=event.pageY;
    this.x=(offsetX/359)*100;
    this.y=(offsetY/479)*100;
    console.log(this.x, this.y);
  }

}
