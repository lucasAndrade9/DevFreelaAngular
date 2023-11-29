import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  constructor(private http: HttpClient) { }

  postUser(payload: IUser) {
    return this.http.post(environment.apiUrl + 'users', payload);
  }
}
