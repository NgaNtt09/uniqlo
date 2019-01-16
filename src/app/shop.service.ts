import { Injectable } from '@angular/core';
import { Titles } from './title-products';
import { Observable , of } from 'rxjs';
import { Products } from './products';
import { Product } from './product';
import {Title} from './title';
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }
  getTitles():Observable<Title[]>{
    return of(Titles);
  }
  getProducts():Observable<Product[]>{
    return of (Products);
  }
}
