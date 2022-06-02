import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  constructor(private fb:FormBuilder,private route:Router,private baseService:BaseService) { }

  ngOnInit(): void {
    // this.route.initialNavigation();
  }
  
  validMessage:string="";
  signUpForm=this.fb.group({
    email:["",[Validators.email]],
    password:[""]
  })
  validate(){
    console.log(this.signUpForm.valid)

    if(this.signUpForm.valid){
      this.validMessage="Valid Form Details";
      
      this.baseService.isLoggedIn=true;
    } 
    else
    {this.validMessage="Invalid Form Details";
    this.baseService.isLoggedIn=false;
  };
  this.route.navigate([{outlets:{signup:["home"]}}])

  }
}
