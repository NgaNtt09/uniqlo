import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation:ViewEncapsulation.None,
  host:{
    '[class.container--img]':"img===true",
  }
})
export class FooterComponent implements OnInit {

  @Input() header: string;
  @Input() container: string;
  @Input() img=false;

  constructor() { }

  ngOnInit() {
  }

}
