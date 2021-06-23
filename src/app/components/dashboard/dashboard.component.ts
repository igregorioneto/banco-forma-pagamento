import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { CardTransactionService } from 'src/app/services/card-transaction.service';
import { UsersService } from '../../services/users.service';
import { Card } from '../../shared/interfaces/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
