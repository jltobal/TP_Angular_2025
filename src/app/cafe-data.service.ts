import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Cafe } from './cafe-list/Cafe';

const MOCK_URL = 'https://687d2d36918b642243313389.mockapi.io/tpa25/cafes';

@Injectable({
  providedIn: 'root',
})
export class CafeDataService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Cafe[]> {
    return this.http
      .get<Cafe[]>(MOCK_URL)
      .pipe(
        tap((cafes: Cafe[]) => cafes.forEach((beer) => (beer.quantity = 0)))
      );
  }
}
