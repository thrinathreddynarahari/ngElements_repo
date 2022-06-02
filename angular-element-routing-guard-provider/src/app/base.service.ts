import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  isLoggedIn=false;
  isLogout=false;

  isAuthendicated(){
     return this.isLoggedIn;
  }
  islogout(){
    return this.isLogout;
  }
}
