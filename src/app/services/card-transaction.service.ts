import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../shared/interfaces/card';

import { environment } from '../../environments/environment';
import { UsersService } from './users.service';
import { User } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CardTransactionService {

  constructor(private http: HttpClient, private users: UsersService) { 
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${environment.api}card`)
  }

}

