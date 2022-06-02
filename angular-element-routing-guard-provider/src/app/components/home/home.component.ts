import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private baseService:BaseService,private route:Router) { }

  ngOnInit(): void {
    // this.route.initialNavigation();
    this.baseService.isLogout=false;
  }
  logOut(){
    this.baseService.isLogout=true;
   this.route.navigate([{outlets:{signup:["signup"]}}])
  }
}
