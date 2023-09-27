import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, of, tap} from 'rxjs';
import {ElementMain} from './home.type';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  elementSubject$ = new BehaviorSubject<ElementMain[]>([]);

  constructor() {
  }

  get elements$(): Observable<ElementMain[]> {
    return this.elementSubject$.asObservable();
  }


  get(): Observable<boolean> {

    return of([
      {
        id: 1,
        name: 'Element 1',
        color: 'red',
        category: 'category 1',
        price: 100
      },
      {
        id: 2,
        name: 'Element 2',
        color: 'blue',
        category: 'category 2',
        price: 200
      }
    ] as ElementMain[])
      .pipe(
        tap(elements => {
          this.elementSubject$.next(elements);
        }),
        map(() => true)
      );
  }

}
