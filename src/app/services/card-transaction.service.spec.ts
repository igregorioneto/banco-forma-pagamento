import { TestBed } from '@angular/core/testing';

import { CardTransactionService } from './card-transaction.service';

describe('CardTransactionService', () => {
  let service: CardTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
