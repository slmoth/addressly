import { Injectable } from '@angular/core';
import { FriendsListTestData } from './friest-test-data';
import { Friend } from './models/friend.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendsListService {

  constructor() { }

  getFriends(): Observable<Friend[]> {
    return of(FriendsListTestData);
  }
}




