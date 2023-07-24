import {Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ProfileComponent} from "./components/profile/profile.component";
import { TimelineComponent } from "./components/timeline/timeline.component";
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'timeline',
    component: TimelineComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
  }
]
