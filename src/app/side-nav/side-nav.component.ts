import { Component, OnInit, Input, Output } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '../title';
import { Location } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

constructor(private shopService: ShopService,
private route: ActivatedRoute,
private location: Location) { }

titles: Title[];
title: Title;
selectedTitle: Title;
@Input() toggle:boolean;

getTitlesProduct(): void {
  this.shopService.getTitles().subscribe(titles => this.titles = titles);
}
ngOnInit() {
  this.getTitlesProduct();
  console.log(this.toggle);
  
}
goBack(){
  this.location.back();
}

}
