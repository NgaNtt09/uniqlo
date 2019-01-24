import { Component, OnInit, Input } from '@angular/core';
import { InfoTitles } from '../title-info';
import { Title } from '../title';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(InfoTitles);
  }

  titles = InfoTitles;
  selectedTab: Title;

  onSelect(title:Title):void{
    this.selectedTab = title;
    console.log(this.selectedTab.name);
  }
}
