import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, retry } from 'rxjs';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private baseService:BaseService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  if(this.baseService.isAuthendicated()){
    return true
  }
  else{
   
    this.route.navigate([{outlets:{signup:["signup"]}}])
    return false;
  }
  }
  
}
