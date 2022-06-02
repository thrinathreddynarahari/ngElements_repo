import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private routeParams:ActivatedRoute) { }
message!:string;
  ngOnInit(): void {
 this.message="OnInit Executed:-";

    this.routeParams.paramMap.subscribe((data)=>{
      console.log(data.get("id"));
    })
  }

}
