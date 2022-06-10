import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: 'John Turner', address: '3282 Shingleton Road', phone: '903-908-6289', picture: 'A', created_at: '2010/08/12' },
      { id: 2, name: 'Anne Green', address: '1997 Beechwood Avenue', phone: '404-456-6528', picture: 'A', created_at: '2019/12/01' },
      { id: 3, name: 'Joko Widjaya', address: '1411 Clinton Street', phone: '757-392-1408', picture: 'A', created_at: '2015/04/04' },
      { id: 4, name: 'Chris Lopez', address: '711 Mattson Street', phone: '727-999-5302', picture: 'A', created_at: '2021/10/08' },
      { id: 5, name: 'Hillary Quill', address: '2302 Parker Drive', phone: '573-559-7890', picture: 'A', created_at: '2012/07/15' }
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}