import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggregator',
  templateUrl: './aggregator.component.html',
  styleUrls: ['./aggregator.component.scss']
})
export class AggregatorComponent implements OnInit {

  constructor(private route:Router) { 
    
  }

  ngOnInit(): void {
    this.route.initialNavigation();
  }

}
