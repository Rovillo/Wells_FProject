import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginModel} from "../../../core/models/login.model";
import {AuthService} from "../../../api/services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit{
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
      email: new FormControl(),
      password: new FormControl()
    })
  }

  submit() {
    console.log(this.form.value);
    const formValue = this.form.value;
    const loginModel: LoginModel = {
      email: formValue.email,
      password: formValue.password,
    }
    this.authService.login(loginModel)
      .subscribe((value) => {

        if (value.code === 'OK') {
          this.toastr.success('Success login');
          localStorage.setItem('user_id', value._doc._id);
          this.router.navigateByUrl('/auth/profile');
        } else {
          console.log('error')
          this.toastr.error(value.error);
          this.errorValidation = true;
        }
      }, (err) => {
        console.log('error')
        console.log(err);
        this.toastr.error(err.error.error);
        this.errorValidation = true;
      })
  }
}
