import { Injectable } from '@angular/core';
import { CardTransactionService } from './card-transaction.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private userService: UsersService, 
    private cardService: CardTransactionService) { }

    get Transaction() {
      return 
    }
}
