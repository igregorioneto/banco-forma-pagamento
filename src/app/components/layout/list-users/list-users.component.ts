import { Component, Input, OnInit } from '@angular/core';
import { CardTransactionService } from 'src/app/services/card-transaction.service';
import { TransactionsService } from 'src/app/services/transactions.service';
import { UsersService } from 'src/app/services/users.service';
import { TransactionPayload } from 'src/app/shared/interfaces/transaction-payload';
import { User } from 'src/app/shared/interfaces/user';
import { Card } from '../../../shared/interfaces/card';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.sass']
})
export class ListUsersComponent implements OnInit {

  transaction: any[] = []

  transactionPayment: any[] = []

  constructor(
    private cardService: CardTransactionService,
    private userService: UsersService,
    private transactionService: TransactionsService) 
    { 
    }

  ngOnInit(): void {
    this.transactionUserWithCard()
  }

  transactionUserWithCard() {
    this.userService.getUsers()
    .subscribe(u => {
      this.cardService.getCards()
        .subscribe(c => {
          this.transactionService.getTransaction()
            .subscribe(t => {
              this.mapTransactionPayment(u, c, t)
            })     
        })
    })
  }

  mapTransactionPayment(user: User[], card: Card[], transaction: TransactionPayload[]) {
    user.map(user => {
      card.map(card => {
        this.verifyTransaction(user, card)
        transaction.map(transaction => {
          this.verifyTransactionPayment(user, card, transaction)
        })
      })
    })
  }

  verifyTransaction(user: User, card: Card) {
      if(user.id === card.user_id) {
      const {name, username, img} = user
        this.transaction
          .push(
            {
              name, 
              username, 
              img
            })
      } 
  }

  verifyTransactionPayment(user: User, card: Card, transaction: TransactionPayload) {
    if(user.id === transaction.destination_user_id && card.id === transaction.card_id) {
      const {name, img, username} = user
      this.transactionPayment.push(
        {
          name, 
          img, 
          username
        }
      )
    }
  }

}
