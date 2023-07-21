export class LoginAnswerModel {
  "_doc": {
    "_id": string;
    "username": string;
    "email": string;
    "profilePicture": string;
    "coverPicture": string;
    "followers": number[];
    "followings": number[];
    "isAdmin": boolean;
  }
  error: string;
  "code": string;
}
