import { Component } from '@angular/core';
import {Todo} from "./core/models/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  constructor(
  ) {
  }

  clickButtonAction($event) {

  }
}
