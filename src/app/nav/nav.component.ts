import { Component, OnInit, Input, ViewEncapsulation, Output } from '@angular/core';
import { ShopService } from '../shop.service';
import { Title } from '../title';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {

  }
})
export class NavComponent implements OnInit {

  constructor(private shopService: ShopService,
    private route:ActivatedRoute,
    private location:Location) { }
 
  titles: Title[];
  title: Title;
  selectedTitle: Title;
  toggle=false;

  getTitlesProduct(): void {
    this.shopService.getTitles().subscribe(titles => this.titles = titles);
  }
  ngOnInit() {
    this.getTitlesProduct();
    
  }
  goBack(){
    this.location.back();
  }
  toggleMenu(){
    this.toggle=!this.toggle;
    console.log(this.toggle);
  }
  
}
