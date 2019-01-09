import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() { }
  navs: string[]=['Bán chạy','Áo tuyển quốc gia','Áo câu lạc bộ','Áo không logo','Giày bóng đá','Áo khoác','Phụ kiện'];
  ngOnInit() {
  }

}
