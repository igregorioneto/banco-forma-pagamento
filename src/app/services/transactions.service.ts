import { Injectable } from '@angular/core';
import { CardTransactionService } from './card-transaction.service';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TransactionPayload } from '../shared/interfaces/transaction-payload';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

    getTransaction(): Observable<TransactionPayload[]> {
      return this.http.get<TransactionPayload[]>(`${environment.api}TransactionPayload`)
    }
}
