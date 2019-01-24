import { Injectable } from '@angular/core';
import { Titles } from './title-products';
import { Observable, of } from 'rxjs';
import { Products } from './products';
import { Product } from './product';
import { Title } from './title';
import { Slides } from'./Slides';
import { Slide } from'./Slide';
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }
  getTitles(): Observable<Title[]> {
    return of(Titles);
  }
  getTitle(id: string): Observable<Title> {
    return of(Titles.find(title => title.name === id));
  }
  getProducts(): Observable<Product[]> {
    return of(Products);
  }
  getProduct(id: number): Observable<Product> {
    return of(Products.find(product => product.id === id));

  }
  getSlides(): Observable<Slide[]> {
    return of(Slides);
  }
  
}
