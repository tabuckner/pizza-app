import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService implements OnInit {
  baseURL = 'https://pizza-c8cb3.firebaseio.com';
  endpoints = {
    page: `${this.baseURL}/page.json`,
    stores: `${this.baseURL}/stores.json`,
    store: `${this.baseURL}/store.json`, // TODO: Get a DB enpoint for store by ID.
    storeDetails: {
      antonio: `${this.baseURL}/store_antonio.json`,
      giovanni: `${this.baseURL}/store_giovanni.json`,
      marco: `${this.baseURL}/store_marco.json`,
    }
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getPage() {
    return this.http.get(this.endpoints.page);
  }

  getStores() {
    return this.http.get(this.endpoints.stores);
  }

  getStore(id: number) {
    return this.http.get(`${this.endpoints.store}/${id}`);
  }

  saveData(endpointName: string, payload: any) {
    return this.http.put(endpointName, payload);
  }
}
