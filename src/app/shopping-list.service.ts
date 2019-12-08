import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor(
    private http: HttpClient
  ) { }

  getShippingList() {
    return this.http.get('https://api.myjson.com/bins/qzuzi');
  }
}
