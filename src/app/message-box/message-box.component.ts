import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host:{
    '[class.container]':"true",
    '[class.container--rep]':"btnType === 'rep'",

  }
})
export class MessageBoxComponent implements OnInit {
@Input() btnType;
  constructor() { }
  @Input() show:boolean=false;
  ngOnInit() {
  }

}
