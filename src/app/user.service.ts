import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';

  getUsers(): Observable<User[]> {  
    return this.http.get<User[]>(this.usersUrl)
    .pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  constructor(
    private http: HttpClient, 
  ) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateUser'))
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      catchError(this.handleError<User>('addHero'))
    );
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
  
    return this.http.delete<User>(url, this.httpOptions).pipe(
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
