import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {RouterModule} from "@angular/router";
import {routes} from "./auth.routes";
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './components/profile/profile.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    TimelineComponent,
    ContactComponent,
    AboutUsComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    TimelineComponent,
    ContactComponent,
    AboutUsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
