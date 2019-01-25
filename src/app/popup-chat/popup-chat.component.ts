import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popup-chat',
  templateUrl: './popup-chat.component.html',
  styleUrls: ['./popup-chat.component.scss']
})
export class PopupChatComponent implements OnInit {
  open:boolean = true;
  @Input() mess:string;

  constructor() { }
  
  ngOnInit() {
  }
  controlForm(){
    this.open=!this.open;
    console.log(this.open);
  }  

}
