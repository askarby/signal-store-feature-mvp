import {HttpClient, HttpParams} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';

export interface UsersQuery {
  ageAtLeast: number | null;
  nameStartsWith: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private readonly client = inject(HttpClient);

  public fetchUsers(query?: UsersQuery): Observable<User[]> {
    const params = new HttpParams();
    if (query) {
      if (query.ageAtLeast !== null) {
        params.set('ageAtLeast', query.ageAtLeast.toString());
      }
      if (query.nameStartsWith !== null) {
        params.set('nameStartsWith', query.nameStartsWith);
      }
    }
    return this.client.get<User[]>('https://api.example.com/users', {
      params
    });
  }
}
