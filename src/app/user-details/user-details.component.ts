import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { async } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userData: any;
  p: number = 1;
  AddForm!: FormGroup;
  onSaveFlag = false;
  Action!: string;
  formObj: any;
  emailExists: boolean = false;
  users: any;
  response: any;
  password:any;
  showPassword!: boolean;
  showPasswordOnPress!: boolean;
  show = false;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}
  modeldisplay = 'none';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"

  closeModelDisplay() {
    this.modeldisplay = 'none';
    this.AddForm.reset();
  }

  emailtest() {
    this.emailExists = false;
    let emailcontrol = this.AddForm.value.mail;
    this.userData.filter((data: any) => {
      if (data.mail.toLowerCase() === emailcontrol.toLowerCase()) {
        this.emailExists = true;
      }
    });
  }
  openModelDisplay() {
    this.modeldisplay = 'block';
  }

  ngOnInit(): void {
    this.password = 'password';
    this.getUserData();
this.toastr.toastrConfig.timeOut = 100000;
    this.toastr.success('User Added Successfully', 'Success');
    this.AddForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
    });
  }
  onClickAdd() {
    this.Action = 'Add';
  //  this.onClick = true;
    this.openModelDisplay();
  }

  getUserData() {
    this.http
      .get('https://userwebapi.azurewebsites.net/User')
      .subscribe((data: any) => {
        this.userData = data;
      });
  }

  onClickSave() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        "Access-Control-Allow-Origin": "*",

      } ),responseType: 'text' as 'json'
    };

    if (this.Action === 'Add') {
      if (this.AddForm.status === 'INVALID') {
        this.AddForm.markAllAsTouched();
      } else {
        this.formObj = {
          Name: this.AddForm.value.name,
          Mail: this.AddForm.value.mail,
          Password: this.AddForm.value.password,
        };
        this.http
          .post('https://userwebapi.azurewebsites.net/User', this.formObj,httpOptions)
          .subscribe((data1: any) => {
            console.log(data1);
          });
        this.AddForm.reset();
        this.getUserData();
        this.closeModelDisplay();
        setTimeout(() => {
          this.getUserData();
        }, 1000);
      }
    } else {
      this.formObj = {
        Id: this.AddForm.value.id,
        Name: this.AddForm.value.name,
        Mail: this.AddForm.value.mail,
        Password: this.AddForm.value.password,
      };
      this.http
        .put(
          `https://userwebapi.azurewebsites.net/User/${this.AddForm.value.id}`,
          this.formObj,httpOptions
        )
        .subscribe();
      this.closeModelDisplay();
      this.toastr.success('User Updated Successfully', 'Success');
    }

    setTimeout(() => {
      this.getUserData();
    }, 1000);
  }

  oneditClick(val1: any, val2: any) {
    this.Action = 'Edit';
    this.openModelDisplay();
    this.AddForm.patchValue(val1);
  }
}
