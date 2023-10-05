import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = '../../assets/data/user.json';

  constructor(private http: HttpClient) { }

  getUser(email: string, password: string): Observable<User | undefined> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      map((users: User[]) => {
        return users.find(user => user.correo === email && user.password === password);
      })
    );
  }

}
