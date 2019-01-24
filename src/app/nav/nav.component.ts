import { Component, OnInit, Input } from '@angular/core';
import { ShopService } from '../shop.service';
import { Title } from '../title';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  host: {
    "[class.responsive]":"reponsive === 'true'",
  }
})
export class NavComponent implements OnInit {

  constructor(private shopService: ShopService,
    private route:ActivatedRoute,
    private location:Location) { }

  @Input() responsive;
  titles: Title[];
  title: Title;
  selectedTitle: Title;

  getTitlesProduct(): void {
    this.shopService.getTitles().subscribe(titles => this.titles = titles);
  }
  ngOnInit() {
    this.getTitlesProduct();
    
  }
  goBack(){
    this.location.back
  }
  
}
