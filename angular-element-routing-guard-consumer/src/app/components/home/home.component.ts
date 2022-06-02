import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { 
    this.route.initialNavigation();
  }

  ngOnInit(): void {


  }
  nav(){
    this.route.navigate([{outlets:{signup:["home"]}}])
  }
}
