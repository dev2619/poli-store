import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users = '../../assets/data/user.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<User[]> {
    return this.http.get<User[]>(this.users);
  }

}
