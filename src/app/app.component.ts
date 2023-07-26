import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  constructor(
    private router: Router,
  ) {
  }

  isAuth(): boolean{
    return !!localStorage.getItem('user_id');
  }

  logoutAction() : void{
    localStorage.removeItem('user_id');
    this.router.navigateByUrl('/auth/login');
  }

  clickButtonAction($event) {

  }


}
