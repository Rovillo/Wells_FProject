import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {LoginModel} from "../../core/models/login.model";
import {RegisterModel} from "../../core/models/register.model";
import {ProfileComponent} from "../../auth/components/profile/profile.component";
import {LoginAnswerModel} from "../../core/models/login-answer.model";


@Injectable({ providedIn: "root"})
export class PostService {
  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    // now returns an Observable of Config
    return this.http.post<any>('http://localhost:8800/api/posts', data);
  }

  delete(userId: string, postId: string) {
    return this.http.delete<any>(`http://localhost:8800/api/posts/${postId}`, {
      body: {
        userId: userId,
      }
    });
  }

  getPostsByUserId(id: string) {
    return this.http.get<any>(`http://localhost:8800/api/posts/timeline/all/${id}`)
  }
}
