import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HomeService} from '../../home.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateMoveResolver implements Resolve<boolean> {

  constructor(private service: HomeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.service.getOne(Number(route.paramMap.get('id')));
  }
}
