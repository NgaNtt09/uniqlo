import { Component, OnInit } from '@angular/core';
import {ShopService} from '../shop.service';  
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private shopService:ShopService) { }
  tiltes:string[];
  getTitlesProduct():void{
      this.shopService.getTitles().subscribe(titles=>this.tiltes=titles);
  }
  ngOnInit() {
     this.getTitlesProduct();
  }

}
