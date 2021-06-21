import { Component, Input, OnInit } from '@angular/core';
import { CardTransactionService } from 'src/app/services/card-transaction.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/shared/interfaces/user';
import { Card } from '../../../shared/interfaces/card';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.sass']
})
export class ListUsersComponent implements OnInit {

  transaction: any[] = []

  constructor(
    private cardService: CardTransactionService,
    private userService: UsersService) 
    { 
    }

  ngOnInit(): void {
    this.transactionUserWithCard()
  }

  transactionUserWithCard() {
    this.userService.getUsers()
    .subscribe(u => {
      u.map(user => {
        this.cardService.getCards()
        .subscribe(c => {
          c.map(card => {
            this.verifyTransaction(user, card)
          })     
        })
      })
    })
  }

  verifyTransaction(user: User, card: Card) {
    if(user.id == card.user_id) {
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

}
