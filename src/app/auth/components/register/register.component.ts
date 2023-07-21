import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterModel} from "../../../core/models/register.model";
import {AuthService} from "../../../api/services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements  OnInit{
  form;
  errorValidation = false;
  errorValidationMessage = '';
  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router,
  ) {
  }
  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirmpassword: new FormControl()
    })
  }

  submit() {
    console.log('test');
    console.log(this.form.value);
    const formValue = this.form.value;
    const registerModel: RegisterModel = {
      username: formValue.username,
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      password: formValue.password,
      confirmpassword: formValue.confirmpassword,
    }
    this.authService.register(registerModel)
      .subscribe((value) => {
        debugger;
        if (value.code === 'OK') {
          this.toastr.success('Success register');
          this.router.navigateByUrl('/auth/login');
        } else {
          console.log('error')
          this.errorValidation = true;
          this.toastr.error(value.error);
          this.errorValidationMessage = value.message;
        }
      }, (err) => {
        console.log(err);
        this.toastr.error(err.error.error);
      })
  }
}
