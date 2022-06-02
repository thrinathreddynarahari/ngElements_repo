import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanDeactivate<unknown> {
  constructor(private baseService:BaseService){

  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.baseService.islogout()){
        return true;
      }
      else{
        return false;
      }
  }
  
}
