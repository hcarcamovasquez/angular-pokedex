import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {HomeService} from './home.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<boolean> {

  constructor(
    private service: HomeService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.service.get();
  }
}
