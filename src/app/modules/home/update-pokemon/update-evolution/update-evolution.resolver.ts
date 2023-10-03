import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { HomeService } from "../../home.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UpdateEvolutionResolver implements Resolve<boolean> {
    constructor(
        private homeService : HomeService
    ){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> {
        return this.homeService.getEvolution(Number(route.paramMap.get('id')));
    }
}