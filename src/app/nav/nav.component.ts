import { Component, OnInit } from '@angular/core';
import {ShopService} from '../shop.service';  
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private shopService:ShopService) { }
  titles:string[];
  selectedTitle:string;
  getTitlesProduct():void{
      this.shopService.getTitles().subscribe(titles=>this.titles=titles);
  }
  ngOnInit() {
     this.getTitlesProduct();
  }
  onSelectTitle(title:string):void{
    this.selectedTitle=title;
    console.log(title);

  }

}
