import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../../core/models/todo.model";
import {LoginModel} from "../../core/models/login.model";
import {RegisterModel} from "../../core/models/register.model";
import {ProfileComponent} from "../../auth/components/profile/profile.component";
import {LoginAnswerModel} from "../../core/models/login-answer.model";
import {ProfileModel} from "../../core/models/profile.model";


@Injectable({ providedIn: "root"})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: LoginModel): Observable<LoginAnswerModel> {
    // now returns an Observable of Config
    return this.http.post<LoginAnswerModel>('http://localhost:8800/api/auth/login', data);
  }

  register(data: RegisterModel): Observable<any> {
    return  this.http.post('http://localhost:8800/api/auth/register', data)
  }

  profile(data: ProfileModel): Observable<any> {
    return  this.http.post('http://localhost:8800/api/auth/profile', data)
  }
}
