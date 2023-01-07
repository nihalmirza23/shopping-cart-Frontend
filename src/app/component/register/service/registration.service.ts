import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private postRegisterationApi:string
  private getUserApi:string



  constructor(private http: HttpClient) {
    this.postRegisterationApi="http://localhost:8095/api/user";
    this.getUserApi="http://localhost:8095/api/user";
  }

  public postRegisteration(user:User):Observable<User>{
    return this.http.post<User>(this.postRegisterationApi,user)
  }

  public getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.getUserApi);
  }

}
