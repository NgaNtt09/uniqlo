import { Injectable } from '@angular/core';
import { Titles } from './title-products';
import { Observable , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }
  getTitles():Observable<string[]>{
    return of(Titles);
  }
}
