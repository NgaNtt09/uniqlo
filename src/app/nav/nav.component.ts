import { Component, OnInit } from '@angular/core';
import {ShopService} from '../shop.service';  
import {Title} from '../title';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private shopService:ShopService) { }
  titles:Title[];
  selectedTitle:Title;
  getTitlesProduct():void{
      this.shopService.getTitles().subscribe(titles=>this.titles=titles);
  }
  ngOnInit() {
     this.getTitlesProduct();
  }
  onSelectTitle(title:Title):void{
    this.selectedTitle=title;
    console.log(title);

  }

}
