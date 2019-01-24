import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    "[class.a-btn]": "true",
    "[class.a-btn--facebook]": "btnType==='facebook'",
    "[class.a-btn--gift]": "btnType==='gift'",
    "[class.a-btn--buy]": "btnType==='buy'",
    "[class.a-btn--slide]": "btnType==='slide'",
    "[class.a-btn--link]": "btnType==='link'",
    "[class.a-btn--popup-chat]": "btnType==='popup-chat'",
    "[class.a-btn--slide--left]": "position==='left'",
    "[class.a-btn--slide--right]": "position==='right'",
  }
})
export class ButtonComponent implements OnInit {
  @Input() btnType;
  @Input() position;
  constructor() { }

  ngOnInit() {
    console.log(this.btnType);
  }
  plusDiv(){

  }

}
